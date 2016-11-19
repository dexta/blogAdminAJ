xyzabc.controller('addUserController', function($scope, $location, navView, authService){

  $scope.pageTitle = "Add User";
  $scope.newUser = {};

  function resetNewUser() {
    $scope.newUser = {name:'test1',email:'keineMail',password:'geheim',role:'gott'};
  }

  resetNewUser();

  $scope.addUser = function addUser(newUser) {
    var userData = "name="+newUser.name+"&password="+newUser.password+"&email="+newUser.email+"&role="+newUser.role;
    authService.addUser(userData);
  };
});