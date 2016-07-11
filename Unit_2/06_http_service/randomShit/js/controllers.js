app.controller('HttpController', function($scope, $http) {
    $http.get('https://api.github.com/zen')
        .then(function(data) {
            $scope.view = {
                zen: data.data
            };
        })
});
app.controller('iTunesController', function($scope, $http) {
    $scope.view = {
        tracks: []
    };
    $http.get('./itunes.json')
        .then(function(data) {
            var tracks = data.data.results;
            tracks.forEach(function(track) {
                $scope.view.tracks.push(track)
            });
        });
});
app.controller('InvalidController', function($scope, $http) {
    $http.get('fakeurl')
        .then(function(data) {
            console.log(data);
        }, function(error) {
            console.log(error);
        });
});
