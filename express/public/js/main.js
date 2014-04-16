var myApp = angular.module('wc2014mongoMod',[]);

myApp.service('teamService', function($http) {
	this.getData = function(callbackFunc) {
		$http({
			method: 'GET',
			url: '/api'
		}).success(function(data){
			callbackFunc(data);
			//console.log(data);
		}).error(function(){
        		alert("error");
    		});
	}
});

myApp.controller('teamCtrl', function($scope, teamService) {
	teamService.getData(function(dataResponse) {
		$scope.teams = dataResponse;
	});
});
