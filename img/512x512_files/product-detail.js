angular.module('shop').controller('ProductDetailCtrl', function($scope) {

	$scope.product = {
		images : [ {
			label : 'first',
			thumbnail : 'img/64x64.png',
			full : 'img/512x512.png'
		}, {
			label : 'second',
			thumbnail : 'img/64x64.png',
			full : 'img/512x512.png'
		}, {
			label : 'third',
			thumbnail : 'img/64x64.png',
			full : 'img/512x512.png'
		} ],
		price : 3.00,
		name : 'product one',
		description : '...',
		rating : 4,
		id : 1
	};

});