angular.module('shop').directive('layoutTopMenu', function() {
	return {
		restrict : 'A',
		replace : true,
		scope : {

		},
		controller : [ "$scope", function($scope) {

			$scope.blogLink = 'http://auavrdd.blogspot.com';
			$scope.cartSize = 2;
			$scope.newPosts = [ {
				title : 'New Research',
				date : '',
				link : $scope.blogLink + '/1'
			}, {
				title : 'New Designs',
				date : '',
				link : $scope.blogLink + '/2'
			}, {
				title : 'New Developments',
				date : '',
				link : $scope.blogLink + '/3'
			} ];

		} ],
		templateUrl : 'directive/layout-top-menu/layout-top-menu.html',
		link : function(scope, element, attrs, fn) {

		}
	};
});
