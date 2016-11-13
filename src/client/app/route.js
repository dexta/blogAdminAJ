xyzabc.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'app/default/home.html',
      controller  : 'defaultController'
    })
    .when('/admin', {
      templateUrl : 'app/admin/home.html',
      controller  : 'adminController'
    })
    .when('/auth', {
      templateUrl : 'app/auth/auth.html',
      controller  : 'authController'
    })
    .when('/editArticle', {
      templateUrl : 'app/user/editArticle.html',
      controller  : 'editArticleController'
    })    
});