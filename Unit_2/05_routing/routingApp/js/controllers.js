app.controller('HomeController', function($scope) {
    $scope.view = {
        one: 'one',
        two: 'two',
        three: 'thr33'
    };
    console.log($scope.view);
});

app.controller('DogsController', function($scope) {
    $scope.dogs = {
        list: ['Cookie', 'Muffin', 'Denny', 'Nikki', 'Cody']
    };
    console.log($scope.dogs.list);
});
