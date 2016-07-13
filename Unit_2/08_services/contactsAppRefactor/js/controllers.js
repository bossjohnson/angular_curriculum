app.controller('ContactsAppController', ['$scope', 'ContactList', function($scope, ContactList) {
    $scope.view = {};
    $scope.view.contactData = ContactList.contactList;
    $scope.addContact = ContactList.addContact;
}]);

app.controller('showController', showController);

showController.$inject = ['$scope', '$routeParams', '$http', 'ContactList'];

function showController($scope, $routeParams, $http, ContactList) {
    $scope.view = {};
    $scope.view.contactData = ContactList.contactList[$routeParams.id];
}
