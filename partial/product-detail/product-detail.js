angular.module('shop').controller('ProductDetailCtrl', function($scope, products) {

	$scope.product = products.getProductDetails(1);

});