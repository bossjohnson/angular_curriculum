app.controller('SearchController', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {
    $rootScope.search = {
        results: []
    }
    $scope.search = {
        title: '',
        search: function(title) {
            $http.get('http://www.omdbapi.com/?s=' + title + '&type=movie')
                .then(function(data) {
                    $rootScope.search = {
                        results: data.data.Search
                    };
                    $location.url('/')
                    $scope.search.title = '';
                });
        }
    };
}]);

app.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('http://omdbapi.com/?i=' + $routeParams.id + '&plot=full')
        .then(function(data) {
            $scope.movie = {};
            for (var key in data.data) {
                if (data.data[key] !== 'N/A') {
                    $scope.movie[key] = data.data[key];
                }
            }
        })
}]);

app.controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope) {

}]);
