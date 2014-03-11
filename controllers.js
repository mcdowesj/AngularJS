'use strict'

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.phones = [
	{'name': 'Nexus S',
	'snippet': 'Fast just got faster with Nexus S.'},
	{'name': 'Motorola XOOM™ with Wi-Fi',
	'snippet': 'The Next, Next Generation tablet.'},
	{'name': 'MOTOROLA XOOM™',
	'snippet': 'The Next, Next Generation tablet.'},
	{'name' : 'HTCOne', 
	'snippet' : 'The best phone in the world'}
	];
});
	

/*
 function TodoCtrl($scope){
	$scope.totalTodos = 4;
	
	$scope.todos = [
		{text:'Learn AngularJS', done:false}, 
		{text:'Build an App', done:false}];
 
 $scope.getLength = function(){
	return $scope.todos.length;
 };
 
	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};
 
 
 }
 */
