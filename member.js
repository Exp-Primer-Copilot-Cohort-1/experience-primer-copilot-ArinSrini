function skillsMember() {
    return {
        restrict: 'E', 
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkilLsMemberController',
        controllerAs: 'vm',
        bindTocontroller: true,
        scope: {
            member: '='
        }
    };
}