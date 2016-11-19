xyzabc.factory('authService', function($http, $q, $location, navView) {
  var service = {
    // Information about the current user
    currentUser: null,
    msg: '',
    error: '',

    login: function(credentials) {
      var login = $http({
        method  :   'POST',
        url     :   '/loginLocal',
        data    :   credentials,
        headers :   {'Content-Type': 'application/x-www-form-urlencoded'},
      });
      login.success(function(data) {
        service.currentUser = data.user;
        service.setUserNavRole();
      }).error(function(error) {
        error = error.error ? error.error : error;
      });
      return login;
    },

    logout: function() {
      var logout = $http.get('/logout');
      logout.success(function() {
        service.currentUser = null;
      });
      return logout;
    },

    // Ask the backend to see if a user is already authenticated -
    // this may be from a previous session.
    requestCurrentUser: function() {
      if (service.isAuthenticated()) {
        return $q.when(service.currentUser);
      } else {
        return $http.get('/user').then(function(response) {
          service.currentUser = response.data.user;
          service.setUserNavRole();
          return service.currentUser;
        });
      }
    },

    addUser: function(newUser) {
      var aUser = $http({
        method  :   'POST',
        url     :   '/addUser',
        data    :   newUser,
        headers :   {'Content-Type': 'application/x-www-form-urlencoded'},
      });
      aUser.success(function(data) {
        service.msg = data;
      }).error(function(error) {
        service.error = error.error ? error.error : error;
      });
      return aUser;      
    },

    // Is the current user authenticated?
    isAuthenticated: function() {
      return !!service.currentUser;
    },

    // get the user data
    getUserName: function() {
      return (service.currentUser)? service.currentUser.name||null : null;
    },
    getUserEmail: function() {
      return (service.currentUser)? service.currentUser.email||null : null;
    },
    getUserProvider: function() {
      return (service.currentUser)? service.currentUser.provider||null : null;
    },
    getUserRole: function() {
      return (service.currentUser)? service.currentUser.role||null : null;
    },

    // Is the current user admin?
    // good for a later project with rightsmanagment
    setUserNavRole: function() {
      navView.set("visitor",false);
      navView.set("user",false);
      navView.set("admin",false);
      var sRole = (service.currentUser||false)? service.currentUser.role||'visitor':'visitor';
      if(sRole==="admin") {
        navView.set("admin",true);
      } else if(sRole==="user") {
        navView.set("user",true);
      } else {
        navView.set("visitor",true);
      }
    },

    isAdmin: function() {
      return service.isAuthenticated() && (service.currentUser.role === "ADMIN");
    }

  };
  return service;
})

xyzabc.run(['authService', function(authService) {
  authService.requestCurrentUser();
}]);