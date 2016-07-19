app.service('PiratesService', PiratesService);

function PiratesService($http) {
    this.all = function() {
        return $http.get('/api/pirates');
    };
}
PiratesService.$inject = ['$http'];
