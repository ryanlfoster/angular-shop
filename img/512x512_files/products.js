angular.module('shop').controller('ProductsCtrl', function($scope) {

	$scope.products = [ {
		thumbnail: 'img/200x150.png',
		price: 3.00,
		name: 'product one',
		description: '...',
		rating: 4,
		id: 1
	}, {
		thumbnail: 'img/200x150.png',
		price: 15.00,
		name: 'product two',
		description: '...',
		rating: 2,
		id: 2
	}, {
		thumbnail: 'img/200x150.png',
		price: 240.00,
		name: 'product three',
		description: '...',
		rating: 5,
		id: 3
	}, {
		thumbnail: 'img/200x150.png',
		price: 4.00,
		name: 'product four',
		description: '...',
		rating: 1,
		id: 4
	} ];

});