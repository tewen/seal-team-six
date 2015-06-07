/// <reference path='../_all.ts' />

module sealTeamSix {
    'use strict';

    export function assignTo(instance:Object, property) {
        return function(data:Object):void {
            instance[property] = data;
        };
    }
}