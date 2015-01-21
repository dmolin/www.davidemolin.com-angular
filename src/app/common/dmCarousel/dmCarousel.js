angular.module('app.common')
.directive('dmCarousel', function carouselDirective() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'common/dmCarousel/dm-carousel.html',
        scope: {
        },
        link: function(scope, elements, attrs) {
            //run the jQuery slideshow plugin...
            var slider = angular.element('.slides');
            slider.slidesjs({
                    width: 960,
                    //height: 305,
                    height: 610,
                    navigation: false
                });
        }
    };
});
