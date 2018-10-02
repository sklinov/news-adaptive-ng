angular.
module('newsApp').
component('articles', {
    templateUrl: 'components/articles-component-template.html',
    controller:
        ['$http', function ArticlesItemsContr($http) {
            var self = this;
            $http.get('data/articles.json').then(function(response){
                self.articlesitem=response.data;
            })
        }]
});