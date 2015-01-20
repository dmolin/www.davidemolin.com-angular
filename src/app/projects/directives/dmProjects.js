angular.module('app.projects')
.directive( 'dmProjects', function dmProjects() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'projects/directives/dm-projects.html',
        scope: {
        },
        controller: function($scope, ProjectService) {
            $scope.projects = [];

            ProjectService.getAll().then(function(data) {
                $scope.projects = data;
                //console.log("projects #" + $scope.projects.length);
            })
        },
        link: function(scope, elements, attrs, controller) {
        }
    };
});
