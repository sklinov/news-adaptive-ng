angular.
module('newsApp').
component('foot', {
    templateUrl: 'components/foot-component-template.html',
    controller:
        ['$http', function FootMenuItemsContr($http) {
            var self = this;
            $http.get('data/menu.json').then(function(response){
                self.menuitem=response.data;
            })
        }]
});