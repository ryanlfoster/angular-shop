angular.module('shop').directive(
		'breadcrumbs',
		function() {
			return {
				restrict : 'A',
				replace : true,
				scope : {
				},
				templateUrl : 'directive/breadcrumbs/breadcrumbs.html',
				controller : function($scope, $route, $location) {

					//console.log($route);
					//console.log($location);
				
					$scope.$on('$routeChangeSuccess',function(event, currentRoute, previousRoute){
						//console.info('event', event);
						//console.info('previousRoute',previousRoute);
						//console.info('currentRoute', currentRoute);
					});
					
					$scope.$watch('$location.path()', function(a,b,c) {
						console.info('$location', $location);
						console.info('a', a);
						console.info('b', b);
						console.info('c', c);
					});
						
					$scope.crumbs = [ {
						label : 'products crumb',
						path : 'products'
					}, {
						label: 'curent page',
						path: 'xxx'
					} ];

				},
				link : function(scope, element, attrs, fn) {

				}
			};
		});
