xyzabc.controller('addUserController', function($scope, $location, navView, $http, $timeout){
  function isAdmin() {
    if(!navView.isUser('admin','/addUser')) console.log("you are not an Admin ...");
  }
  isAdmin();

  $scope.navShow = navView.show;

  $scope.pageTitle = "Add User";
  $scope.newUser = {};

  function resetNewUser() {
    $scope.newUser = {name:'test1',email:'doch@eine.mail',password:'geheim',role:'gott'};
  }

  resetNewUser();

  $scope.successMsg = '';
  $scope.errors = {};
  $scope.startFade = false;

  $scope.addUser = function addUser(aNewUser) {
    // var userData = "name="+newUser.name+"&password="+newUser.password+"&email="+newUser.email+"&role="+newUser.role;
    // authService.addUser(userData);
    $scope.errors = {};
    var nUO = Object.keys(aNewUser).reduce(function(a,k){a.push(k+'='+aNewUser[k]);return a},[]).join('&');
    $http({
      method  :   'POST',
      url     :   '/addUser',
      data    :   nUO,
      headers :   {'Content-Type': 'application/x-www-form-urlencoded'},
    }).success(function(data, status, headers, config) {
      $scope.success = data;
      $scope.startFade = true;
      $timeout(function(){
            $scope.startFade = false;
        }, 6000);
    }).error(function(data, status, headers, config) {
      // Convert server side errors to AngularJS errors.
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