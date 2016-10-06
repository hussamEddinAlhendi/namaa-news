angular.module('namaa-news', [
  'namaa-news.news',
  'namaa-news.users',
  'namaa-news.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/news', {
      templateUrl: 'app/news/news.html',
      controller: 'NewsController'
    })
    .when('/users', {
      templateUrl: 'app/users/users.html',
      controller: 'UsersController'
    })

    .otherwise('/users')
})
