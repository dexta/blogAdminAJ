xyzabc.controller('viewUserController', function($scope, $filter, userService, navView){
  $scope.pageTitle='view all User';
  $scope.pageContent='some like user overview with some editable values';

  function isAdmin() {
    if(!navView.isUser('admin','/viewUser')) console.log("you are not an Admin ...");
  }
  isAdmin();

  $scope.navShow = navView.show;

  $scope.userList = userService.listUser;


  $scope.allRoles = [
    {value:'admin', text: 'Administrator'},
    {value:'user', text: 'Translator'},
    {value:'visitor', text: 'Just View'}
  ];
  $scope.showSelectRole = function showSelectRole(user) {
    var selected = $filter('filter')($scope.allRoles, {value: user.role});
    return (user.role && selected.length) ? selected[0].text : 'Not set';
  };

  $scope.allLangs = [
    {value:'de-DE', text: 'Deutsch'},
    {value:'en-EN', text: 'Englisch'},
    {value:'es-ES', text: 'Spanisch'},
    {value:'it-IT', text: 'Italienisch'}
  ];
  $scope.showSelectLang = function showSelectLang(user) {
    var selected = [];
    angular.forEach($scope.allLangs, function(s) { 
      if ((user||false) && (user.lang||false) && user.lang.indexOf(s.value) >= 0) {
        selected.push(s.text);
      }
    });
    return selected.length ? selected.join(', ') : 'Not set';
  };


  $scope.saveUser = function saveUser(user) {
    console.dir(user);
  };

});