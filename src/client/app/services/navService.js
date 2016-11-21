xyzabc.factory('navView',function($location){
  var nav = {
    auth: '/auth',
    home: '/',
    visitor: true,
    user: false,
    admin: false,
    lastVisit: []
  };

  return {
    set: function(value,to){
      nav[value] = to;
    },
    show: function(value){
      return nav[value];
    },
    isUser: function(role,target){
      console.log(role+" === "+nav[role]);
      if(!nav[role]) {
        nav.lastVisit = [role,target];
        $location.path(nav.auth);
        return false;
      } else {
        return true;
      }
    },
    hasLast: function(){
      var last = (nav.lastVisit.length>0)? nav.lastVisit : false;
      if( last || nav[last[0]] || false ) {
        nav.lastVisit = '';
        $location.path(last[1]);
      } else if(last.length>0) {
        nav.lastVisit = [];
        $location.path(nav.home);
      }
    }
  };

});
