angular.module('shop').controller('ProductsCtrl', function($scope, products) {

	$scope.products = products.getProducts();

});