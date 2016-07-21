app.service('PiratesService', PiratesService);

function PiratesService($http) {
    this.all = function() {
        return $http.get('/api/pirates');
    };
    this.removePirate = function(id) {
        return $http.delete('/api/pirates/' + id);
    }
}
PiratesService.$inject = ['$http'];
