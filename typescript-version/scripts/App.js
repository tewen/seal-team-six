/// <reference path='_all.ts' />
var sealTeamSix;
(function (sealTeamSix) {
    'use strict';
    angular.module('sealTeamSix', []).
        controller('TeamCtrl', sealTeamSix.TeamCtrl).
        service('sealService', sealTeamSix.SealService);
})(sealTeamSix || (sealTeamSix = {}));
//# sourceMappingURL=App.js.map