var myApp = angular.module('wc2014mongoMod',['ngRoute']);

myApp.service('teamService', function($http) {
	this.getTeams = function(callbackFunc) {
		$http({
			method: 'GET',
			url: '/getTeams'
		}).success(function(data){
			callbackFunc(data);
		}).error(function(){
        		alert("error");
    		});
	};
	this.addTeam = function(callbackFunc) {
                $http({
                        method: 'POST',
                        url: '/addTeams'
                }).success(function(data){
                        callbackFunc(data);
                }).error(function(){
                        alert("error");
                });
        }
});

myApp.controller('teamCtrl', function($scope, teamService) {
	$scope.getTeams = function() { 
		teamService.getTeams(function(dataResponse) {
			$scope.teams = dataResponse;
		});
	};
	$scope.addTeam = function() {
		// add a team, make a post to /addTeam
	};
});

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/addTeam', {
		templateUrl: 'views/match.html',
		controller: 'teamCtrl'	
	});
}]);
