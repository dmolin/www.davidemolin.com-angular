angular.module('app.home')
.controller('app.home.HomeController', [
    "$scope",
    "$stateParams",
    function($scope, $stateParams) {
        $scope.section = $stateParams.sectionId;

    }
]);
