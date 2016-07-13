app.factory('ContactList', ContactList);

ContactList.$inject = ['$http'];

function ContactList($http) {
    var ContactList = {};
    ContactList.contactList = [];

    ContactList.addContact = function(obj) {
        $http.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + obj.name)
            .then(function(data) {
                obj.gif = data.data.data[0].images.downsized.url;
                console.log(obj);
                ContactList.contactList.push(obj);
            });
    };
    ContactList.findContact = function() {
        // TODO:
    };
    ContactList.removeContact = function() {
        // TODO:
    };
    return ContactList;
}
