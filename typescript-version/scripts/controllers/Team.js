/// <reference path='../_all.ts' />
var sealTeamSix;
(function (sealTeamSix) {
    'use strict';
    var TeamCtrl = (function () {
        function TeamCtrl($scope, sealService) {
            this.$scope = $scope;
            this.sealService = sealService;
            this.sealService.getAll().then(sealTeamSix.assignTo(this, 'seals'));
        }
        TeamCtrl.prototype.good = function (seal, good) {
            seal.good = good;
        };
        TeamCtrl.prototype.count = function (good) {
            return _.filter(this.seals, function (s) { return !!s.good === good; }).length;
        };
        TeamCtrl.$inject = [
            '$scope',
            'sealService'
        ];
        return TeamCtrl;
    })();
    sealTeamSix.TeamCtrl = TeamCtrl;
})(sealTeamSix || (sealTeamSix = {}));
//# sourceMappingURL=Team.js.map