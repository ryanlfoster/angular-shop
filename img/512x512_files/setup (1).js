angular.module('shop', []);

angular.module('shop').config(function($routeProvider) {

    $routeProvider.
	when('/cart',{templateUrl: 'partial/cart/cart.html'}).
	when('/products',{templateUrl: 'partial/products/products.html'}).
	when('/product/:id',{templateUrl: 'partial/product-detail/product-detail.html'}).
	when('/home',{templateUrl: 'partial/home/home.html'}).
	when('/login',{templateUrl: 'partial/login/login.html'}).
	when('/logout',{templateUrl: 'partial/logout/logout.html'}).
	when('/signup',{templateUrl: 'partial/signup/signup.html'}).
	/* Add New Routes Above */
    otherwise({redirectTo:'/home'});

});

angular.module('shop').run(function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

});
