/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/members", {templateUrl: "partials/members.html", controller: "PageCtrl"})
    .when("/application_domains", {templateUrl: "partials/application_domains.html", controller: "PageCtrl"})
    .when("/it_research", {templateUrl: "partials/it_research.html", controller: "PageCtrl"})
	.when("/students", {templateUrl: "partials/students.html", controller: "PageCtrl"})
        .when("/news", {templateUrl: "partials/news.html", controller: "PageCtrl"})
    .when("/resources", {templateUrl: "partials/resources.html", controller: "PageCtrl"})
    // Blog
//    .when("/news", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
//    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
