angular.
module('newsApp').
component('menubar', {
    templateUrl: 'components/menu-component-template.html',
    controller:
        ['$http', function MenuItemsContr($http) {
            var self = this;
            $http.get('data/menu.json').then(function(response){
                self.menuitem=response.data;
            })
         }]
});