/// <reference path='../_all.ts' />

module sealTeamSix {
    'use strict';

    export class TeamCtrl {

        public seals: Seal[];

        public static $inject = [
            '$scope',
            'sealService'
        ];

        constructor(
            private $scope: ng.IScope,
            private sealService: ISealService
        ) {

            this.sealService.getAll().then(assignTo(this, 'seals'));
        }

        good(seal:Seal, good:boolean):void {
            seal.good = good;
        }

        count(good:boolean):number {
            return _.filter(this.seals, (s:Seal) => !!s.good === good).length;
        }

    }
}