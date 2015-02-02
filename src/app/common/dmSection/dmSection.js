angular.module('app.common')
.directive('dmSection', ['$timeout', function sectionDirective($timeout) {
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

            if(scope.isExpanded) {
                handleExpanded(elements);
            }

            scope.toggle = function toggle() {
                scope.isExpanded = !scope.isExpanded;
                if(scope.isExpanded) { handleExpanded(elements); }
            }
        }
    };

    function handleExpanded(element) {
        console.log("expanded");

        var $section = $(element);
        $timeout(function() {
            if($section.length) {
                $(document.body).animate({
                    scrollTop: $section.offset().top
                }, 500);
            }
        });
    }
}]);
