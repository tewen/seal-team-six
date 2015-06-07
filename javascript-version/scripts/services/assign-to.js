angular.module('sealTeamSix').value('assignTo', function (instance, property) {
    return function (data) {
        instance[property] = data;
    };
});