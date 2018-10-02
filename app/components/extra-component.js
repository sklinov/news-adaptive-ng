angular.
module('newsApp').
component('extra', {
    templateUrl: 'components/extra-component-template.html',
    controller:
        ['$http', function ArticlesItemsContr($http) {
            var self = this;
            $http.get('data/extra.json').then(function(response){
                self.extraitem=response.data;
            })
        }]
});