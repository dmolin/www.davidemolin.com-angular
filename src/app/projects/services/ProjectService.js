module.exports = function(module) {
    return module.factory('ProjectService', [ '$http',
        function($http){
            var projects = [];
            return {
                getAll: function() {
                    console.log("getAll");
                    return $http.get('data/projects/all.json').then(function(response){
                        console.log(response);
                        return response.data;
                    });
                }
            }
        }
    ]);
};
