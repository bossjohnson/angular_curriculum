var app = angular.module('RedditClone', ['ngAnimate']);

app.controller('RedditController', function($scope) {
    $scope.posts = [];


    $scope.showNewPostForm = function() {
        $scope.post.newPost = true;
    };

    $scope.submitPost = function(event) {
        event.preventDefault();
        $scope.post.date = Date.now();
        $scope.posts.push(angular.copy($scope.post));
        $scope.resetPost();
        $scope.newPostForm.$setUntouched();
        console.log($scope.posts);
    };

    $scope.resetPost = function() {
        $scope.post = {
            title: null,
            author: null,
            imageURL: null,
            description: null,
            date: null,
            comments: [],
            newPost: false,
            upVotes: 0
        };
    };

    $scope.upVote = function(post) {
        post.upVotes += 1;
    };

    $scope.downVote = function(post) {
        post.upVotes -= 1;
    };

    $scope.resetPost();
});
