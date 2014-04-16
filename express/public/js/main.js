console.log("loaded main.js");

var myApp = angular.module('wc2014mongoMod',[]);
//var myApp = angular.module('wc2014mongoMod');

myApp.service('teamService', function($http) {
	//delete $http.defaults.headers.common['X-Requested-With'];
	this.getData = function(callbackFunc) {
		$http({
			method: 'GET',
			url: '/api'
			//params: 'limit=10, sort_by=created:desc',
			//headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
		}).success(function(data){
			// With the data succesfully returned, call our callback
			//callbackFunc(data);
			console.log("data received");
			console.log(data);
		}).error(function(){
        		alert("error");
    		});
	}
});

myApp.controller('teamCtrl', function($scope, teamService) {
	$scope.data = null;
	console.log("we're in the controller");
	teamService.getData(function(dataResponse) {
		$scope.data = dataResponse;
	});
});
