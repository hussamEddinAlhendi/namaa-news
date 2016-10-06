angular.module('namaa-news.services', [])

.factory('Users', function ($http) {
  var getAllUsers = function () {
    return $http({
      method: 'GET',
      url: '/api/users'
    })
    .then(function (resp) {
      return resp;
    });
  };
return {
    getAllUsers: getAllUsers
  };
})