angular.module('shop').controller('CartCtrl', function($scope) {

	$scope.cart = [ {
		name : 'product two',
		quantity : 20,
		price : 15.00,
		id : 2
	}, {
		name : 'product three',
		quantity : 1,
		price : 240.00,
		id : 3
	} ];

	$scope.subTotal = function() {
		var subTotal = 0;
		for ( var i in $scope.cart) {
			var item = $scope.cart[i];
			subTotal += item.quantity * item.price;
		}
		return subTotal;
	};

});