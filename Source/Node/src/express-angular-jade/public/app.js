"use strict";

// Angular: https://docs.angularjs.org/api/ng/function/angular.module
// EJS:		http://www.embeddedjs.com/getting_started.html

// Declare app level module which depends on filters, and services
// The angular.module is a global place for creating, registering and
// retrieving AngularJS modules. All modules (AngularJS core or 3rd party)
// that should be available to an application must be registered using this mechanism.

// Another more compact way of declaring services, controllers etc.
// var app = angular.module("app", []);
// app.service("MathService", function() { /* ... */ });
// app.service("CalculatorService", function(MathService){ /* ... */});
// app.controller("CalculatorController", function($scope, CalculatorService) { /* ... */});

//           angular.module( name, [requires], [configFn]);
var module = angular.module( "myApp", [
	"myApp.controllers",
	"myApp.filters",
	"myApp.services",
	"myApp.directives"
] );

// configure existing services inside initialization blocks.
module.config( function( $routeProvider, $locationProvider )
{
	$routeProvider.when( "/view1", {
		templateUrl: "partials/partial1",
		controller: "MyCtrl1"
	} );

	$routeProvider.when( "/view2", {
		templateUrl: "partials/partial2",
		controller: "MyCtrl2"
	} );

	$routeProvider.otherwise( {
		redirectTo: "/view1"
	} );

	$locationProvider.html5Mode( true );
} );


// ----------------------------------------------------------------------------------------- Controllers
var controllerModule = angular.module( "myApp.controllers", [] );

controllerModule.controller( "AppCtrl", function( $scope, $http )
{
	var response = $http( { method: "GET", url: "/api/name" } );

	response.success( function( data, status, headers, config )
	{
		$scope.name = data.name;
	} );

	response.error( function( data, status, headers, config )
	{
		$scope.name = "Error!";
	} );
} );

controllerModule.controller( "MyCtrl1", function( $scope, CalculatorService )
{
	$scope.doSquare = function()
	{
		$scope.something = $scope.number + "squared is";
		$scope.answer = CalculatorService.square( $scope.number );
	};

	$scope.doCube = function()
	{
		$scope.something = $scope.number + "'cubed' is";
		$scope.answer = CalculatorService.cube( $scope.number );
	};
} );

controllerModule.controller( "MyCtrl2", function( $scope )
{
	// write Ctrl here
} );


// ----------------------------------------------------------------------------------------- Directives

var directiveModule = angular.module( "myApp.directives", [] );

directiveModule.directive( "appVersion", function( version )
{
	return function( scope, elm, attrs )
	{
		elm.text( version );
	};
} );

directiveModule.directive( "appSomethingSomething", function( something )
{
	return function( scope, elm, attrs )
	{
		elm.text( something );
	};
} );


// ----------------------------------------------------------------------------------------- Filters

angular.module( "myApp.filters", [] ).filter( "myfilter", function( version )
{
	return function( text )
	{
		return String( text ).replace( /\%VERSION\%/mg, version );
	};
} );

// ----------------------------------------------------------------------------------------- Services
// Demonstrate how to register services. In this case it is a simple value service.
var serviceModule = angular.module( "myApp.services", [] );

serviceModule.value( "version", "0.0.1" );
serviceModule.value( "something", "hello there!" );

serviceModule.service( "MathService", function()
{
	this.add = function( a, b )
	{
		return a + b
	};

	this.multiply = function( a, b )
	{
		return a * b
	};
} );

serviceModule.service( "CalculatorService", function( MathService )
{
	this.square = function( a )
	{
		return MathService.multiply( a, a );
	};

	this.cube = function( a )
	{
		return MathService.multiply( a, MathService.multiply( a, a ) );
	};
} );