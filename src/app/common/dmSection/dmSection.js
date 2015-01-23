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
        },
        link: function(scope, elements, attrs) {
            scope.current = scope.current === 'true';
            scope.isExpanded = scope.current;

            scope.toggle = function toggle() {
                scope.isExpanded = !scope.isExpanded;
            }
        }
    };
});
