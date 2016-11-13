xyzabc.factory('navView',function(){
  var nav = {
    visitor: true,
    user: false,
    admin: false
  };

  return {
    set: function(value,to){
      nav[value] = to;
    },
    show: function(value){
      return nav[value];
    }
  };

});
