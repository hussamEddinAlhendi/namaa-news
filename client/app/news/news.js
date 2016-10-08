angular.module('namaa-news.news', [])

.controller('NewsController', function ($scope, $mdDialog, News) {
	$scope.initialize = function () {
		News.getAllNews().then(function (resp) {
			$scope.news = resp.data;
		});
	};

	$scope.addNewNews = function () {
		News.addNew($scope.new).then(function (resp) {
			console.log(resp);
			$scope.initialize();
		});
	};

	$scope.deleteNews = function (id) {
		News.deleteNews(id).then(function (resp) {
			console.log(resp);
			$scope.initialize();
		});
	};

	$scope.editNews = function (news) {
		News.editNews(news).then(function (resp) {
			console.log(resp);
			$scope.initialize();
		});
	};

	$scope.showDialog = function(ev, news) {
		$mdDialog.show({
			locals: {news: news},
			controller: editNews,
			templateUrl: 'app/news/editNews.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		})
		.then(function(news) {
			$scope.editNews(news)
		}, function() {
			console.log('cancel');
		});
	};

	function editNews($scope, $mdDialog, news) {
		console.log(news)
		$scope.news = news;
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.edit = function(news) {
	      $mdDialog.hide(news);
	    };
	}

	$scope.showDetails = function(ev, news) {
		$mdDialog.show({
			locals: {news: news},
			controller: details,
			templateUrl: 'app/news/newsDetails.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		})
	};

	function details($scope, $mdDialog, news) {
		$scope.news = news;
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };
	}
});