module.exports = function sectionDirective() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'common/directives/dm-section.html',
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
};
