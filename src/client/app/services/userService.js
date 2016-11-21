xyzabc.factory('userService', function($http, $q, $location) {
  var user = {
    // some vars to start with
    list:[],
    waitGet: false,

    formateUser: function(list) {
      var nList = [];
      for(var u in list) {
        var tList = {};
        tList['name'] = list[u].name;
        tList['email'] = list[u].email;
        tList['role'] = list[u].role;
        tList['id'] = list[u].id;
        tList['active'] = (list[u].active===1);
        tList['lang'] = list[u].lang.split(',');
        console.dir(tList['lang']);
        nList.push(tList);
      }
      return nList;
    },


    getUser: function() {
      user.waitGet = true;
      var getUserList = $http.get('/viewUsers');
      getUserList.success(function(data) {
        user.list = user.formateUser(data);
        user.waitGet = false;
        return user.list;
      });
      return getUserList;
    },

    listUser: function() {
      if(user.waitGet) return [];
      if(user.list.length===0) {
        return user.getUser();
      } else {
        return user.list;
      }
    }




  };

  return user;
});