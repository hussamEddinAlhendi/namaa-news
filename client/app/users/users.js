angular.module('namaa-news.users', [])

.controller('UsersController', function ($scope, $mdDialog, Users) {
		$scope.initialize = function () {
			Users.getAllUsers().then(function (resp) {
				$scope.users = resp.data;
			});
		};

		$scope.addNewUser = function () {
			Users.addNewUser($scope.user).then(function (resp) {
				console.log(resp);
				$scope.initialize();
			});
		};

		$scope.deleteUser = function (username) {
			Users.deleteUser(username).then(function (resp) {
				console.log(resp);
				$scope.initialize();
			});
		};

		$scope.editUser = function (username, password, email) {
			Users.editUser(username, password, email).then(function (resp) {
				console.log(resp);
				$scope.initialize();
			});
		};

		$scope.showDialog = function(ev, user) {
			$mdDialog.show({
				locals: {user: user},
				controller: editUser,
				templateUrl: 'app/users/editUser.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
			})
			.then(function(editUser) {
				$scope.editUser(editUser)
			}, function() {
				console.log('cancel');
			});
		};

		function editUser($scope, $mdDialog, user) {
			$scope.user = user;
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.edit = function(user) {
	      $mdDialog.hide(user);
	    };
  }
});
