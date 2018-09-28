angular.
module('newsApp').
component('blackbar', {
    templateUrl: 'components/black-bar-component-template.html',
    controller: function DateTime($scope) {
        $scope.date = new Date();

    }
});