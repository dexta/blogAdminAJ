xyzabc.controller('authController', function($scope, $location, navView, authService){
  $scope.showLogin = true;
  $scope.showSignUp = false;
  $scope.showLogout = false;
  $scope.resetEmail = '';

  function doWhat() {
    var d = $location.search();
    if(d['do']==='signup') {
      $scope.showSignUp = true;
    } else if(d['do']==='logout') {
      $scope.showLogout = true;
      authService.logout();
    } else if(d['do']==='login') {
      $scope.showLogin = true;
    } else {
      $scope.showLogin = true;
    }
  }
  doWhat();

  $scope.formLogin = {username:'bob',password:'geheim'};

  $scope.getUserName = authService.getUserName;
  $scope.getUserEmail = authService.getUserEmail;
  $scope.getUserProvider = authService.getUserProvider;
  $scope.getUserRole = authService.getUserRole;
  
  $scope.logInto = function() {
    var seFo = "username="+$scope.formLogin.username+"&password="+$scope.formLogin.password;
    authService.login(seFo);
  }; 

  $scope.currentUser = function() {
     console.log("currentUser "+JSON.stringify(authService.requestCurrentUser()));;
  };

  $scope.resetPassword = function() {
    var resetStr = "email="+$scope.resetEmail+"&randome=shit";
    authService.resetPassword(resetStr,
      function(data){
        console.dir(data);
      },
      function(error){
        var errors = {};
        for(var i = 0; i < data.length; i++) {
            var err = data[i];

            var param, msg;
            for(var key in err) {
                if(key === 'param') param = err[key];
                if(key === 'msg') msg = err[key];
            }
            errors[param] = msg;
        }
        $scope.errors = errors;
      });
  };
});
