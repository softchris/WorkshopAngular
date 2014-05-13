describe('given product service',function(){
	beforeEach(module('services'));

    var productSrv;

	beforeEach(inject(function (_productSrv_) {
        productSrv= _productSrv_;

    }));

	it('when getting a product with a name and a description',function(){
        var actual = productSrv.getFullText({Name : "Tomato", Description : "With Basil"});
		expect(actual).toBe("Tomato With Basil");
	});

});
