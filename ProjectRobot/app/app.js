var app = angular.module('blogPost', ['ngRoute']);


app.config(function ($routeProvider) {

    $routeProvider.when('/', {

        controller: 'HomeController',
        templateUrl: 'app/views/home.html',
        title: 'Home page'

    }).when('/content', {
        controller: 'ContentController',
        templateUrl: 'app/views/content.html',
        title: 'Content page'

    }).when('/create', {

        controller: 'CreateController',
        templateUrl: 'app/views/create.html',
        title: 'Create page'

    }).otherwise({
        redirectTo: '/'

    });
});
