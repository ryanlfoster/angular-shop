angular.module('shop', []);

angular.module('shop').config(function($locationProvider, $routeProvider) {

	///$locationProvider.html5Mode(true);
	
    $routeProvider.
	when('/home',{templateUrl: 'partial/home/home.html'}).
	when('/cart',{templateUrl: 'partial/cart/cart.html'}).
	when('/products',{templateUrl: 'partial/products/products.html'}).
	when('/products/:category',{templateUrl: 'partial/products/products.html'}).
	when('/product/:id',{templateUrl: 'partial/product-detail/product-detail.html'}).
	when('/login',{templateUrl: 'partial/login/login.html'}).
	when('/logout',{templateUrl: 'partial/logout/logout.html'}).
	when('/signup',{templateUrl: 'partial/signup/signup.html'}).
	when('/checkout',{templateUrl: 'partial/checkout/checkout.html'}).
	when('/wishlist',{templateUrl: 'partial/wishlist/wishlist.html'}).
	when('/account',{templateUrl: 'partial/account/account.html'}).
	when('/blog',{templateUrl: 'partial/blog/blog.html'}).
	when('/forum',{templateUrl: 'partial/forum/forum.html'}).
	when('/support',{templateUrl: 'partial/support/support.html'}).
	when('/contact',{templateUrl: 'partial/contact/contact.html'}).
	when('/tutorials',{templateUrl: 'partial/tutorials/tutorials.html'}).
	when('/contact',{templateUrl: 'partial/contact/contact.html'}).
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
