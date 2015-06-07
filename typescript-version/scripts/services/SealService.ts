/// <reference path='../_all.ts' />

module sealTeamSix {
    'use strict';

    export class SealService implements ISealService {

        public static $inject = [
            '$http'
        ];

        constructor(private $http:ng.IHttpService) {
        }

        getAll():ng.IPromise<{}> {
            return this.$http.get('/data/seal-team.json').then((data) => _.get(data, 'data'));
        }
    }
}