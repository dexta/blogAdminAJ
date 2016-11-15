xyzabc.controller('editArticleController',function($scope) {
  $scope.pageTitle = "Edit an article !";
  $scope.htmlContent = "";
  $scope.showLang = false; 
  $scope.showImages = true;
  $scope.showOptions = false;

  $scope.saveContent = function saveContent() {
    console.log("HTML OUTPUT\n"+$scope.htmlContent);
  };

  $scope.getRestWidth = function getRestWidth() {
    var no = 0;
    var list = ['Lang','Images','Options'];
    for(var l in list) {
      if($scope["show"+list[l]]) no++;
    }
    return "col-lg-"+(12-(no*3));
  };

  $scope.myDate = new Date();

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  $scope.isOpen = false;
 
  $scope.openCalendar = function(e) {
    e.preventDefault();
    e.stopPropagation();

    $scope.isOpen = true;
  };

  $scope.timepickerOptions = {'show-meridian':false,'show-seconds':true};
  $scope.datepickerOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };


// Image Upload Hazle here !!1!



});
