angular.
module('newsApp').
component('burger', {
    templateUrl: "components/burger-component-template.html",
    controller:
        ['$http', function MenuItemsContr($http) {
            var self = this;
            $http.get('data/menu.json').then(function(response){
                self.menuitem=response.data;
            });
    }]
})