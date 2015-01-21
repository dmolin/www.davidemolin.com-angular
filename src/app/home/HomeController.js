angular.module('app.home')
.controller('app.home.HomeController', function($scope, $stateParams) {
    console.log("params", $stateParams.sectionId);
    $scope.section = $stateParams.sectionId;
});
