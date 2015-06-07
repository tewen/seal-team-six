/// <reference path='../_all.ts' />
var sealTeamSix;
(function (sealTeamSix) {
    'use strict';
    function assignTo(instance, property) {
        return function (data) {
            instance[property] = data;
        };
    }
    sealTeamSix.assignTo = assignTo;
})(sealTeamSix || (sealTeamSix = {}));
//# sourceMappingURL=AssignTo.js.map