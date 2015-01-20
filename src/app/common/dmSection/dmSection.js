angular.module('app.common')
.directive('dmSection', function sectionDirective() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'common/dmSection/dm-section.html',
        scope: {
            title: '@',
            contentClass: '@'
        },
        link: function(scope, elements, attrs) {
            scope.isExpanded = false;
            scope.toggle = function toggle() {
                scope.isExpanded = !scope.isExpanded;
            }
        }
    };
});
