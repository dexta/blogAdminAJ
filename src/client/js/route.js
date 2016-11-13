rimowamn.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'default/home.html',
      controller  : 'defaultController'
    })

    .when('/admin', {
      templateUrl : 'admin/admin.html',
      controller : 'adminController'
    })

    .when('/user', {
      templateUrl : 'user/user.html',
      controller : 'userController'
    })

    .when('/login', {
      templateUrl : 'login/login.html',
      controller : 'loginController'
    })
});