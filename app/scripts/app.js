'use strict';

/**
 * @ngdoc overview
 * @name angTestApp
 * @description
 * # angTestApp
 *
 * Main module of the application.
 */
angular
    .module('angTestApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngTouch',
        'ngTable'
    ])


.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
    })
    .when('/autors', {
        templateUrl: 'views/autors.html',
        controller: 'AutorsCtrl'
    })
    .when('/ebook', {
        templateUrl: 'views/ebook.html',
        controller: 'EbookCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });
});
