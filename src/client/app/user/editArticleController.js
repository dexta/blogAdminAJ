xyzabc.controller('editArticleController',function($scope,$http) {
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

$scope.mainImage = 'http://dexta.de/img/2013/Sunset_TreeMountain_2xMech_1xViper_423[7:52].png';

$scope.uploadFile = function(files) {
  var fd = new FormData();
  var fr = new FileReader();

  //Take the first selected file
  fd.append("file", files[0]);

  $http.post('/upload', fd, {
    withCredentials: true,
    headers: {'Content-Type': undefined },
    transformRequest: angular.identity
  })
  .success(function() { console.log("...all right!..."); })
  .error(function() { console.log("..damn!..."); });


  fr.onload = function(e) {
    $scope.mainImage = e.target.result;
  }
  fr.readAsDataURL(files[0]);
};








 //a simple model to bind to and send to the server
    // $scope.model = {
    //     name: "",
    //     comments: ""
    // };

    // //an array of files selected
    // $scope.files = [];

    // //listen for the file selected event
    // $scope.$on("fileSelected", function (event, args) {
    //     $scope.$apply(function () {            
    //         //add the file object to the scope's files collection
    //         $scope.files.push(args.file);
    //     });
    // });
    
    // //the save method
    // $scope.save = function() {
    //     $http({
    //         method: 'POST',
    //         url: "/upload",
            //IMPORTANT!!! You might think this should be set to 'multipart/form-data' 
    //         // but this is not true because when we are sending up files the request 
    //         // needs to include a 'boundary' parameter which identifies the boundary 
    //         // name between parts in this multi-part request and setting the Content-type 
    //         // manually will not set this boundary parameter. For whatever reason, 
    //         // setting the Content-type to 'false' will force the request to automatically
    //         // populate the headers properly including the boundary parameter.
    //         headers: { 'Content-Type': false },
    //         //This method will allow us to change how the data is sent up to the server
    //         // for which we'll need to encapsulate the model data in 'FormData'
    //         transformRequest: function (data) {
    //             var formData = new FormData();
    //             //need to convert our json object to a string version of json otherwise
    //             // the browser will do a 'toString()' on the object which will result 
    //             // in the value '[Object object]' on the server.
    //             formData.append("model", angular.toJson(data.model));
    //             //now add all of the assigned files
    //             formData.append('avatar',data.files[0]);
    //             // for (var i = 0; i < data.files; i++) {
    //             //     //add each file to the form data and iteratively name them
    //             //     formData.append("file" + i, data.files[i]);
    //             // }
    //             return formData;
    //         },
    //         //Create an object that contains the model and files which will be transformed
    //         // in the above transformRequest method
    //         data: { model: $scope.model, files: $scope.files }
    //     }).
    //     success(function (data, status, headers, config) {
    //         console.log("success!");
    //     }).
    //     error(function (data, status, headers, config) {
    //         console.log("failed!");
    //     });
    // };


});


// xyzabc.directive('fileUpload', function () {
//     return {
//         scope: true,        //create a new scope
//         link: function (scope, el, attrs) {
//             el.bind('change', function (event) {
//                 var files = event.target.files;
//                 //iterate files since 'multiple' may be specified on the element
//                 for (var i = 0;i<files.length;i++) {
//                     //emit event upward
//                     scope.$emit("fileSelected", { file: files[i] });
//                 }                                       
//             });
//         }
//     };
// });