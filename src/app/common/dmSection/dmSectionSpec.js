describe("dmSection", function() {
    beforeEach(module("app")); //this loads the template cache
    beforeEach(module("app.common"));

    var compile, rootScope, httpBackend, scope, cache;

    beforeEach(inject(function($compile, $rootScope, $httpBackend, $templateCache) {
        compile = $compile;
        rootScope = $rootScope;
        httpBackend = $httpBackend;
        scope = rootScope.$new();
        cache = $templateCache;
    }));

    it('should render a header and a content block', function() {

        var element = compile('<article data-id="about-me" dm-section title="About me" ></article>')(scope);
        scope.$digest(); //this triggers the update on the markup
        expect(angular.element('h2',element).text()).toEqual('About me');
    });

    it('should toggle the status of the content area when clicking on the header link', function() {
        var element = compile('<article data-id="about-me" dm-section title="About me" ></article>')(scope);
        scope.$digest(); //this triggers the update on the markup

        var es = element.isolateScope();
        spyOn(es, 'toggle').and.callThrough();

        $('a', element).click();
        expect(es.toggle).toHaveBeenCalled();
    });

    it('should transclude the content of the section into the template', function() {
        var element = compile([
            '<article data-id="about-me" dm-section title="About me" >',
                '<p class="transcluded-content">Transcluded content</p>',
            '</article>'
            ].join(''))(scope);
        scope.$digest(); //this triggers the update on the markup

        expect(angular.element('p.transcluded-content', element).length).toBe(1);
    });
});
