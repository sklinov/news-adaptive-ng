angular.
module('newsApp').
    component('headbar', {
        templateUrl: 'components/head-component-template.html',
        controller:
            ['$http', function CurrencyController($http) {
                $http.get('http://data.fixer.io/api/latest?access_key=c2f05255b9d0d02a887cc6f592498054').then(function(response)
                {
                    var self=this;
                    console.log(response.data);
                    var euro_rate = response.data.rates.RUB;
                    euro_rate = Math.round(euro_rate * 100) / 100;
                    console.log(euro_rate);
                    var dollar_rate = response.data.rates.RUB / response.data.rates.USD;
                    dollar_rate = Math.round(dollar_rate * 100) / 100;
                    console.log(dollar_rate);
                    self.euro_rate=euro_rate;
                    self.dollar_rate=dollar_rate;
                })

               }
            ]

    });