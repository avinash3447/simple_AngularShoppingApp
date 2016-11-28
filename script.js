
	// create the module and name it shoppingApp

var shopngApp = angular.module('shoppingApp', ['ngRoute']);

shopngApp.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/page1.html',
				controller  : 'page1Controller'
			})

			// route for the page2 page
			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'page2Controller'
			})

			// route for the page3 page
			.when('/page3', {
				templateUrl : 'pages/page3.html',
				controller  : 'page3Controller'
			});
	});