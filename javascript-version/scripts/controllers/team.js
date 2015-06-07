angular.module('sealTeamSix').controller('TeamCtrl',
    ['$scope', 'seals', 'assignTo',
        function ($scope, seals, assignTo) {

        seals.getAll().then(assignTo(this, 'seals'));

        this.good = function (seal, good) {
            seal.good = good;
        };

        this.count = function (good) {
            return _.filter(this.seals, function (s) {
                return !!s.good === good;
            }).length;
        };

    }]);