/// <reference path='_all.ts' />

module sealTeamSix {
    'use strict';

    angular.module('sealTeamSix', []).
        controller('TeamCtrl', TeamCtrl).
        service('sealService', SealService);
}