module.exports = function index(grunt) {
    return {
        template: {
            options: {},
            dev: {
                options: {
                    data:{
                        scripts: [
                            '<script src="js/jquery.min.js"></script>',
                            '<script src="js/jquery.cycle2.min.js"></script>',
                            '<script src="js/jquery.slides.min.js"></script>',
                            '<script src="js/underscore-min.js"></script>',
                            '<script src="js/xml2json.min.js"></script>',
                            //'<script src="js/angular.min.js"></script>',
                            '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.js"></script>',
                            '<script src="js/angular-ui-router.js"></script>',
                            '<script src="js/angular-animate.min.js"></script>',
                            '<script src="js/app/bootstrap.js"></script>',
                            '<script src="js/app/templates.js"></script>',
                            '<script src="js/app/utils.js"></script>',
                            //module: common
                            '<script src="js/app/common/index.js"></script>',
                            '<script src="js/app/common/dmCarousel/dmCarousel.js"></script>',
                            '<script src="js/app/common/dmSection/dmSection.js"></script>',
                            '<script src="js/app/common/dmFeeds/dmFeeds.js"></script>',
                            //module: home
                            '<script src="js/app/home/index.js"></script>',
                            '<script src="js/app/home/HomeController.js"></script>',
                            //module: projects
                            '<script src="js/app/projects/index.js"></script>',
                            '<script src="js/app/projects/directives/dmProjects.js"></script>',
                            '<script src="js/app/projects/services/ProjectService.js"></script>',
                            //module: recommendations
                            '<script src="js/app/recommendations/index.js"></script>',
                            '<script src="js/app/recommendations/directives/dmRecommendations.js"></script>',


                        ].join('\n')
                    }
                },

                files: {
                    '<%= distdir %>/index.html': ['src/index.html.tpl']
                }
            },

            prod: {
                options:{
                    data:{
                        scripts: [
                            '<script src="js/app.js"></script>\n'
                        ].join('')
                    }
                },

                files: {
                    '<%= distdir %>/index.html': ['src/index.html.tpl']
                }
            }
        }
    };
};
