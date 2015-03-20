// create app and add dependencies here
angular.module('services',[]);
angular.module('controllers',[]);

var routes =
    {
        'cart' : {
            'route' : '/cart',
            'templateUrl' : 'partials/cart/all.html',
            'controller': 'cartCtrl'
        },
        'start' : {
            'route' : '/start',
            'templateUrl' : 'partials/start/start.html',
            'controller': 'startCtrl'
        },
        'productDetail' : {
            'name' : 'productDetail',
            'route' : '/products/:id',
            'templateUrl' : 'partials/products/detail.html',
            'controller': 'productCtrl'
        },
        'productEdit' : {
            'name' : 'productEdit',
            'route' : '/productEdit/:id',
            'templateUrl' : 'partials/products/edit.html',
            'controller': 'productEditCtrl'
        },
        'productCreate' : {
            'route' : '/productCreate',
            'templateUrl' : 'partials/products/create.html',
            'controller': 'productCreateCtrl'
        },
        'productsAll' : {
            'route' : '/products',
            'templateUrl' : 'partials/products/all.html',
            'controller': 'productCtrl'
        },

        'productDetail' : {
            'name' : 'productDetail',
            'route' : '/products/:id',
            'templateUrl' : 'partials/products/detail.html',
            'controller': 'productCtrl'
        },
        'customersAll' : {
            'route' : '/customers',
            'templateUrl' : 'partials/customers/all.html',
            'controller': 'customerCtrl'
        },

        'login' : {
            'route' : '/login',
            'templateUrl' : 'partials/login/login.html',
            'controller': 'loginCtrl'
        },
        'bookings' : {
            'route' : '/bookings',
            'templateUrl' : 'partials/booking/all.html',
            'controller': 'bookingCtrl'
        },
        'createBooking' : {
            'route' : '/createBooking',
            'templateUrl' : 'partials/booking/create.html',
            'controller': 'createBookingCtrl'
        }

    };

var app =angular.module('app',['services','controllers','ngRoute']);
app.config(['$routeProvider',
    function($routeProvider){

        for(route in routes){
            var routeEntry = routes[route];

            $routeProvider.
                when(routeEntry.route, {
                    templateUrl: routeEntry.templateUrl,
                    controller: routeEntry.controller
                });

            $routeProvider.otherwise({
                redirectTo: routes.login.route
            });

        }
    }]);

