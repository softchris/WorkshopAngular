describe('given product controller',function(){
    beforeEach(module('services'));
    beforeEach(module('controllers'));

    var productSrv;
    var mockHttp;
    var appSrv;
    var productCtrl;
    var ctrl;
    var scope;
    var $controller;

    beforeEach(inject(function (
        _appSrv_,
        _productSrv_,
        _$httpBackend_,
        $rootScope,
        $controller

        ) {
        appSrv = _appSrv_;
        productSrv= _productSrv_;
        mockHttp = _$httpBackend_;


        scope = $rootScope.$new();
        mockHttp.expectGET('http://localhost:53666/api/Products')
            .respond(
                [
                    {Name : "p1",Description:"d1"},
                    {Name : "p2",Description:"d2"}
                ]
            );

        ctrl = $controller("productCtrl",{ $scope : scope, $location : {}, $routeParams : {} });

    }));

    it('when fetching all products',function(){

        mockHttp.flush();
        expect(scope.products.length).toBe(2);
        expect(scope.products[0].Name).toBe("p1");
        expect(scope.products[1].Name).toBe("p2");
    });

});

