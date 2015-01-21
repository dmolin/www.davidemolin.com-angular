angular.module('app.recommendations')
.directive('dmRecommendations', function($http, $timeout) {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'recommendations/directives/dm-recommendations.html',

        controller: function($scope) {
            $scope.recs = [];
            $scope.loaded = false;
            $scope.rendered = false;

            $http.get('data/recommendations/all.json').then(function(response) {
                    $scope.recs = response.data;
                    $scope.loaded = true;
                });

        },
        link: function(scope, elements, attrs) {
            //run the jQuery slideshow plugin...
            scope.$watch('loaded', function() {
                var slider = angular.element('.slides-container');
                $timeout(function(){
                    slider.slidesjs({
                            width: 300,
                            height: 270,
                            navigation: false
                    });
                    scope.rendered = true;
                },200);
            });
        }

    };
});
