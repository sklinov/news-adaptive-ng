angular.
module('newsApp').
component('news', {
    templateUrl: 'components/news-component-template.html',
    controller:
        ['$http', function MenuItemsContr($http) {
            var self = this;
            $http.get('data/news.json').then(function(response){
                self.menuitem=response.data;
            })
        }]
});