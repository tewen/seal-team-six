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
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
var sealTeamSix;
(function (sealTeamSix) {
    'use strict';
    var Seal = (function () {
        function Seal(name, img, good) {
            this.name = name;
            this.img = img;
            this.good = good;
        }
        return Seal;
    })();
    sealTeamSix.Seal = Seal;
})(sealTeamSix || (sealTeamSix = {}));
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
/// <reference path='_all.ts' />
var sealTeamSix;
(function (sealTeamSix) {
    'use strict';
    angular.module('sealTeamSix', []).
        controller('TeamCtrl', sealTeamSix.TeamCtrl).
        service('sealService', sealTeamSix.SealService);
})(sealTeamSix || (sealTeamSix = {}));
/// <reference path='../typings/lodash/lodash.d.ts' />
/// <reference path='../typings/jquery/jquery.d.ts' />
/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path='controllers/Team.ts' />
/// <reference path='interfaces/ISealService.ts' />
/// <reference path='models/Seal.ts' />
/// <reference path='services/AssignTo.ts' />
/// <reference path='services/SealService.ts' />
/// <reference path='App.ts' /> 
//# sourceMappingURL=build.js.map