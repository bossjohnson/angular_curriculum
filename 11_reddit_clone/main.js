var app = angular.module('RedditClone', ['ngAnimate']);

app.controller('RedditController', function($scope) {
    $scope.posts = [];
    $scope.sort = {};
    $scope.sort.sortBy = 'upVotes';

    $scope.Date = function(arg) {
        return moment(arg);
    };

    $scope.momentize = function(date) {
        return moment(date).calendar();
    };

    $scope.showNewPostForm = function() {
        $scope.post.newPost = !$scope.post.newPost;
    };

    $scope.submitPost = function(event) {
        event.preventDefault();
        $scope.post.date = moment();
        $scope.posts.push(angular.copy($scope.post));
        $scope.resetPost();
        $scope.newPostForm.$setUntouched();
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
            newComment: false,
            show: true
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

    $scope.submitComment = function(event, post, form) {
        event.preventDefault();
        post.comments.push({
            author: post.commentAuthor,
            text: post.commentText
        });
        post.commentAuthor = '';
        post.commentText = '';
        post.newComment = false;
        form.$setUntouched();
    };

    $scope.resetPost();
});
