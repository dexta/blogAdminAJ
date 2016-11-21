var xyzabc = angular.module('xyzabc',['ngRoute','ui.bootstrap','ui.bootstrap.datetimepicker','textAngular','xeditable'])

.config(function($provide) {
  $provide.decorator('taOptions',['$delegate', function(taOptions){
      taOptions.toolbar = [
        ['h1', 'h3', 'h6', 'p', 'pre', 'quote','bold', 'italics', 'underline','html', 'insertLink', 'wordcount', 'charcount']
      ];
      // console.dir(taOptions);
    return taOptions;
  }]);
})

.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});