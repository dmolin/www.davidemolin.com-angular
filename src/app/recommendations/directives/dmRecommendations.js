angular.module('app.recommendations')
.directive('dmRecommendations', function($http, $timeout) {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'recommendations/directives/dm-recommendations.html',

        controller: function($scope) {
            $scope.data = { recs: [] };
            $scope.loaded = false;
            $scope.rendered = false;

            $http.get('data/recommendations/all.json').then(function(response) {
                    $scope.data.recs = response.data;
                    //timeout executes its handler at the end of the digest cycle
                    $timeout(function() { $scope.loaded = true; });
                });

        },
        link: function(scope, elements, attrs) {
            //run the jQuery slideshow plugin...
            scope.$watch('loaded', function(nval,oval) {
                if(!nval) return;

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
