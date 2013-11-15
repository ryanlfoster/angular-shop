angular.module('shop').controller('BreadcrumbsCtrl',function($scope, $location){

	$scope.crumbs = [{label:'products crumb',path:'products'}];
	
	$scope.current = 'product id';
	
});