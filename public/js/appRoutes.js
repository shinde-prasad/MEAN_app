// public/js/appRoutes.js
angular.module('appRoutes', [])
.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 
    function($urlRouterProvider, $stateProvider, $locationProvider) {

        $stateProvider

        .state('login', {
            url: "/login",
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: 'views/base.html',
            controller: 'BaseController',
        })

        .state('app.home', {
            url: '/home',
            views: {
                'appContent' :{
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                }
            }
        })

        .state('app.userdetails', {
            url: '/user/details',
            views: {
                'appContent' :{
                    templateUrl: 'views/user/details.html',
                    controller: 'UserDetailsController'
                }
            },
            params: {
                id: '',
                name: ''
            }
        })
        ;

        $urlRouterProvider.otherwise("/login");
        /*$routeProvider

        // login page
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        // Base page
        .when('/app', {
            templateUrl: 'views/base.html',
            controller: 'AppController',
        })

        // home page
        .when('/app/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // Users page
        .when('/app/users', {
            templateUrl: 'views/users.html',
            controller: 'UsersController'
        })

        .otherwise({ redirectTo: '/login' });*/

        $locationProvider.html5Mode(true);

    }]);