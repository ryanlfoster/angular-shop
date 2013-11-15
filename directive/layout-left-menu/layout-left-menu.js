angular.module('shop').directive('layoutLeftMenu', function() {
	return {
		restrict : 'A',
		replace : false,
		scope : {

		},
		controller : [ "$scope", "$element", "$location", function($scope, $element, $location) {

			$scope.view = $location.$$path;

			$scope.$on('$routeChangeStart', function() {
				$scope.view = $location.$$path;
			});

		} ],
		templateUrl : 'directive/layout-left-menu/layout-left-menu.html',
		link : function(scope, element, attrs, fn) {

		}
	};
});
