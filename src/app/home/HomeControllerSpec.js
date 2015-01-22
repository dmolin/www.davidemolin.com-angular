describe('HomeController', function() {
    var ctrl,
        scope,
        createController;

    beforeEach(module("app.home"));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        createController = function(params) {
            return $controller('HomeController', _.extend({
                $scope: scope,
                $stateParams: { sectionId:'' }
            }, params||{}));
        }
    }));

    it('should default to an empty section value if not provided', function() {
        var ctrl = createController();
        expect(scope.section).toBe('');
    });

    it('should store the section value as a scope property', function() {
        var ctrl = createController({$stateParams: { sectionId:'yesnos'}});
        expect(scope.section).toBe('yesnos');
    })

});
