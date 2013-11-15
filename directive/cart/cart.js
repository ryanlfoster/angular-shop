angular.module('shop').directive('cart', function() {
	return {
		restrict : 'E',
		replace : true,
		scope : {

		},
		controller : [ "$scope", "cart", function($scope, cart) {

			$scope.cartContents = cart.getContents();

			$scope.calculateSubTotal = function() {
				var subTotal = 0;
				for ( var i in $scope.cartContents) {
					var item = $scope.cartContents[i];
					subTotal += item.quantity * item.price;
				}
				return subTotal;
			};

			$scope.calculateTax = function() {
				return $scope.calculateSubTotal() * 0.9;
			};

			$scope.calculateShipping = function() {
				return $scope.calculateWeight() * 0.2;
			};

			$scope.calculateWeight = function() {
				var weight = 0;
				for ( var i in $scope.cartContents) {
					var item = $scope.cartContents[i];
					weight += item.quantity * item.weight;
				}
				return weight;
			};

			$scope.weight = $scope.calculateWeight();

			$scope.cost = {
				subTotal : $scope.calculateSubTotal(),
				tax : $scope.calculateTax(),
				shipping : $scope.calculateShipping()
			};

			$scope.calculateTotal = function() {
				return Object.keys($scope.cost).reduce(function(total, key) {
					return total + $scope.cost[key];
				},0);
			};

			$scope.totalCost = $scope.calculateTotal();
		} ],
		templateUrl : 'directive/cart/cart.html',
		link : function(scope, element, attrs, fn) {

		}
	};
});
