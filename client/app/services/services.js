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

  var addNewUser = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users',
      data: JSON.stringify(user)
    })
    .then(function (resp) {
      return resp;
    })
  };

  var deleteUser = function (username) {
    return $http({
      method: 'DELETE',
      url: '/api/users/' + username
    })
    .then(function (resp) {
      return resp;
    })
  };

  var editUser = function (user) {
    return $http({
      method: 'PUT',
      url: '/api/users/',
      data: JSON.stringify(user)
    })
  }

return {
    getAllUsers: getAllUsers,
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    editUser: editUser
  };
})


.factory('News', function ($http) {
  var getAllNews = function () {
    return $http({
      method: 'GET',
      url: '/api/news'
    })
    .then(function (resp) {
      return resp;
    });
  };

  var addNew = function (news) {
    return $http({
      method: 'POST',
      url: '/api/news',
      data: JSON.stringify(news)
    })
    .then(function (resp) {
      return resp;
    })
  };

  var deleteNews = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/news/' + id
    })
    .then(function (resp) {
      return resp;
    })
  };

  var editNews = function (news) {
    return $http({
      method: 'PUT',
      url: '/api/news/',
      data: JSON.stringify(news)
    })
  }

return {
    getAllNews: getAllNews,
    addNew: addNew,
    deleteNews: deleteNews,
    editNews: editNews
  };
})