angular.module('app.home')
.controller('HomeController', [
    "$scope",
    "$stateParams",
    function($scope, $stateParams) {
        $scope.section = $stateParams.sectionId;

    }
]);
