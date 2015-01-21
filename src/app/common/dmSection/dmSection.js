angular.module('app.common')
.directive('dmSection', function sectionDirective() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'common/dmSection/dm-section.html',
        scope: {
            title: '@',
            contentClass: '@',
            current: '@?'
        },
        controller: function($scope) {
            $scope.current = $scope.current === 'true';
        },
        link: function(scope, elements, attrs) {
            scope.isExpanded = scope.current;

            scope.toggle = function toggle() {
                scope.isExpanded = !scope.isExpanded;
            }
        }
    };
});
