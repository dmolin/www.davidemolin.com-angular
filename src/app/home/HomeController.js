angular.module('app.home')
.controller('app.home.HomeController', function($scope, $stateParams) {
    $scope.section = $stateParams.sectionId;

});
