app.controller('SearchController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $rootScope.search = {
        results: []
    }
    $scope.search = {
        title: '',
        search: function(title) {
            console.log('searching...');
            $http.get('http://www.omdbapi.com/?s=' + title + '&type=movie')
                .then(function(data) {
                    $rootScope.search = {
                        results: data.data.Search
                    };
                });
        }
    };
}]);

app.controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    console.log('using HomeController');
    console.log($rootScope);
}]);
