angular.module('shop').factory('cart',function($http) {

	var cart = {
		getContents: function() {
			return [ {
				name : 'product two',
				quantity : 20,
				price : 15.00,
				id : 2,
				weight : 3.00
			}, {
				name : 'product three',
				quantity : 1,
				price : 240.00,
				id : 3,
				weight : 17.00
			} ];
		}
	};

	return cart;
});