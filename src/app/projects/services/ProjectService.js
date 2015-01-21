
angular.module('app.projects')
.factory('ProjectService', [ '$http', function($http) {
    var projects = [];
    return {
        getAll: function() {
            return $http.get('data/projects/all.json').then(function(response){
                return response.data;
            });
        }
    }
}]);
