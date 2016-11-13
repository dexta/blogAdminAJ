xyzabc.controller('navController', function($scope, navView, authService){
  $scope.title = "xyzabc App";

  $scope.navShow = navView.show;

  $scope.openCloseMenu = function openCloseMenu(who) {
    if(who==="admin") {
      $scope.isAdminMenuCollapsed = !$scope.isAdminMenuCollapsed;
      $scope.isWorkMenuCollapsed = true;      
    } else if(who==="user") {
      $scope.isWorkMenuCollapsed = !$scope.isWorkMenuCollapsed;
      $scope.isAdminMenuCollapsed = true;      
    }
  }

  $scope.isAdminMenuCollapsed = true;
  $scope.isWorkMenuCollapsed = true;

  $scope.getUserName = authService.getUserName;
  $scope.getUserProvider = authService.getUserProvider;
  $scope.isAuthenticated = authService.isAuthenticated;

  $scope.btnStyle = function(provider) {
    if(provider==="local") {
      return 'btn-success';
    } else if(provider==="facebook") {
      return 'btn-facebook';
    } else if(provider==="twitter") {
      return 'btn-twitter';
    } else if(provider==="google") {
      return 'btn-google';
    } else {
      return 'btn-danger';
    } 
  };

});
