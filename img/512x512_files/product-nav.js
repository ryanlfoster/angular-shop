angular.module('shop').controller('ProductNavCtrl',function($scope, $route, $location){
	//console.log($route);
	//console.log($location);

	$scope.view = $location.$$path;
	
	$scope.$on('$routeChangeStart', function() { 
		$scope.view = $location.$$path;
		//console.log($scope.view);
	});

});