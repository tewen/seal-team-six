angular.module('sealTeamSix').factory('seals', ['$http', function ($http) {
    return {
        getAll: function () {
            return $http.get('/data/seal-team.json').then(function (data) {
                return _.get(data, 'data');
            });
        }
    };
}]);