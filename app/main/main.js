'use strict';

angular.module('hrApp.main', ['ngRoute'])

	.config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
		$routeProvider.when('/main', {
			templateUrl: 'main/main.html',
			controller : 'MainCtrl'
		});

		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://habrahabr.ru/**',
			'http://habrastorage.org/**',
			'**'
		]);
	}])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

		//$http({method: 'GET', url: 'http://habrahabr.ru/posts/frontend/'}).
		//	success(function (data, status, headers, config) {
         //     console.log('success');
         //     console.log(data);
         //     console.log(status);
         //     console.log(headers);
         //     console.log(config);
		//		// this callback will be called asynchronously
		//		// when the response is available
		//	}).
		//	error(function (data, status, headers, config) {
		//		// called asynchronously if an error occurs
		//		// or server returns response with an error status.
		//	});

      $http.get("http://habrahabr.ru/posts/frontend/")
          .then(function(response){
            console.log(response);
            var dd = angular.element(response.data);
            console.log(dd);

            $scope.movie = response.data;
          });
	}]);