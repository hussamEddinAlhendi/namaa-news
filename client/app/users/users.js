angular.module('namaa-news.users', [])

.controller('UsersController', function ($scope, Users) {
	Users.getAllUsers().then(function (resp) {
		$scope.users = resp.data;
	})
});