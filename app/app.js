'use strict';

angular.module('hrApp', [
	'ngRoute',
	'hrApp.main',
	'hrApp.settings'
])

	.config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
		$routeProvider.otherwise({redirectTo: '/main'});

		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://habrahabr.ru/**',
			'http://habrastorage.org/**',
			'**'
		]);
	}]);
