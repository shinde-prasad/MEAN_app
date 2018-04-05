// public/js/app.js

angular.module('sampleApp', ['ui.router', 'appRoutes', 'ngMaterial', 
	'ngAnimate','ngAria','ngMessages',
	'AppCtrls', 'UserService'
])

.config(function( $mdThemingProvider, $sceDelegateProvider ) {

	$sceDelegateProvider.resourceUrlWhitelist([
	    // Adding 'self' to the whitelist, will allow requests from the current origin.
	    'self',
	    // Using double asterisks here, will allow all URLs to load.
	    // We recommend to only specify the given domain you want to allow.
	    '**'
    ]);

    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
    .primaryPalette("indigo")
    .accentPalette('light-green')
    .warnPalette('blue');
});