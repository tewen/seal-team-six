/// <reference path='../_all.ts' />
var sealTeamSix;
(function (sealTeamSix) {
    'use strict';
    var SealService = (function () {
        function SealService($http) {
            this.$http = $http;
        }
        SealService.prototype.getAll = function () {
            return this.$http.get('/data/seal-team.json').then(function (data) { return _.get(data, 'data'); });
        };
        SealService.$inject = [
            '$http'
        ];
        return SealService;
    })();
    sealTeamSix.SealService = SealService;
})(sealTeamSix || (sealTeamSix = {}));
//# sourceMappingURL=SealService.js.map