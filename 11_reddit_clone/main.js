var app = angular.module('RedditClone', ['ngAnimate']);

app.controller('RedditController', function($scope) {
    $scope.posts = [];


    $scope.showNewPostForm = function() {
        $scope.post.newPost = !$scope.post.newPost;
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
            upVotes: 0,
            showComments: false,
            newComment: false
        };
    };

    $scope.upVote = function(post) {
        post.upVotes += 1;
    };

    $scope.downVote = function(post) {
        post.upVotes -= 1;
    };

    $scope.showComments = function(post) {
        post.showComments = !post.showComments;
    };

    $scope.newComment = function(post) {
        post.newComment = !post.newComment;
    };

    $scope.submitComment = function(event, post) {
        event.preventDefault();
        console.log(event);
        post.comments.push({
            author: post.commentAuthor,
            text: post.commentText
        });
        post.commentAuthor = '';
        post.commentText = '';
        post.newComment = false;
    };

    $scope.resetPost();
});
