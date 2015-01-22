describe('HomeController', function() {

    var ctrl;
    beforeEach(inject(function($controller) {
        ctrl = $controller('HomeController');
    }));

    it('should test something', function() {
        expect(ctrl.section).toBeUndefined();
    });
});
