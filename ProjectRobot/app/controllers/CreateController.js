app.controller('CreateController', function ($scope, $http, $q, BlogService) {


    // Create a Database to store Blogs
    //$scope.currIndex;
   // var moment = require('moment');
    $scope.title = "";
    $scope.author = "";
    $scope.blurb = "";
    $scope.post = "";
    $scope.date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $scope.blogs = []; // holds all blogs

    /*
    This is used to edit the current blog.
    $scope.getIndex = function () {
        $scope.currIndex = BlogService.sendEditIndex();
    }    
    */

    // Connection to the GET Functions
    $scope.tempBlog = BlogService.blogData
    function fetchAllBlogs() {
        BlogService.blogData().then(function (data) {
            $scope.tempBlog = data;
            console.log(data)
        }, function () {
            // Error
        })
    };
    fetchAllBlogs();

    // Click event for the Post
    $scope.newBlogArticle = function () {
        console.log($scope.title, $scope.author, $scope.blurb, $scope.post, $scope.date);

        // Create the Object to Post
        var objToPost = {
            title: $scope.title, author: $scope.author, blurb: $scope.blurb,
            post: $scope.post, date: $scope.date }

        BlogService.addBlogArticle(objToPost).then(function (data) {
            // notify user of success
            console.log("Success", data);
            fetchAllBlogs();
        }, function () {
            // error
            console.log('addBlogArticle Error');
        })
    };  

});