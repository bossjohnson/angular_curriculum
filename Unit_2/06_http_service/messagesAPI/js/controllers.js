app.controller('MessagesController', function($scope, $http) {
    $scope.view = {
        messages: []
    };
    $http.get('./messages.json')
        .then(function(data) {
            var messages = data.data;
            for (var message of messages) {
                $scope.view.messages.push(message);
            }
            console.log($scope.view.messages);
        })
});
