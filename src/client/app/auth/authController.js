xyzabc.controller('authController', function($scope, $location, authService){
  $scope.showLogin = true;
  $scope.showSignUp = false;
  $scope.showLogout = false;
  
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

});
