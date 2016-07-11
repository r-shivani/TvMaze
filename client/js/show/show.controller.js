angular.module('show.controller', [])
	.controller('ShowController', function ($scope, show) {
		$scope.show = show;
		console.log("show " + $scope.show.id);
	});