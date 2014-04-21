// create app and add dependencies here
angular.module('services',[]);
angular.module('controllers',[]);

var routes =
    {
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
            'controller': 'productCtrl'
        },
        'productsAll' : {
            'route' : '/products',
            'templateUrl' : 'partials/products/all.html',
            'controller': 'productCtrl'
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
                redirectTo: routes.start.templateUrl
            });

        }
    }]);

