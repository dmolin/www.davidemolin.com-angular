describe('ProjectService', function() {
    var svc, httpBackend;

    beforeEach(module('app.projects'));
    beforeEach(inject(function(_ProjectService_, $httpBackend) {
        svc = _ProjectService_;
        httpBackend = $httpBackend;
    }));

    afterEach(function() {
        httpBackend.resetExpectations();
    });

    it('defines a getAll service endpoint', function() {
        expect(svc.getAll).toBeDefined();
        expect(_.isFunction(svc.getAll)).toBe(true);
    });

    it('return the list of all projects', function() {
        httpBackend.whenGET('data/projects/all.json')
        .respond({
            data:[
                {
                    "id":1,
                    "title": "project1.title",
                    "imgUrl": "project1.image",
                    "url": "http://project1.url"
                },
                {
                    "id":2,
                    "title": "project2.title",
                    "imgUrl": "project2.image",
                    "url": "http://project2.url"
                }

            ]
        });

        svc.getAll().then(function(data) {
            expect(data.length).toEqual(2);
            expect(data[1].title).toBe('project2.title');
            httpBackend.flush();
        });

    });
});
