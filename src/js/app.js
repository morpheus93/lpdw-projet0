var apiAddress = "http://127.0.0.1:8080/api";

var app = angular.module('projet2', [
'ui.router',
'ui.bootstrap'
    ]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/index.html",
      reload:true
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "views/signup.html",
      controller : "signupCtrl"
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller : "loginCtrl"
    })
    .state('organization', {
      url: "/organizations/:id",
      templateUrl: "views/organizations.html",
      controller : "organizationCtrl"
    })
    .state('user', {
      url: "/users/:id",
      templateUrl: "views/users.html",
      controller : "userCtrl"
    })
    .state('editProfil', {
      url: "/profile/edit",
      templateUrl: "views/edit_profil.html",
      controller : "userCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/users.html",
      controller : "contactCtrl"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "views/projects/list.html",
      controller : "projectCtrl"
    })
    .state('projects.item', {
      url: "/:id",
      templateUrl: "views/projects/project.html",
    })
    .state('announcements', {
      url: "/announcements",
      templateUrl: "views/announcements/list.html",
      controller : "announcementCtrl"
    })
    .state('announcements.item', {
      url: "/:id",
      templateUrl: "views/announcements/announcement.html",
    })
    .state('search', {
      url: "/search/:query",
      templateUrl: "views/search.html",
      controller : "searchCtrl"
    });
});

app.controller('mainCtrl', ['$scope', '$http','$rootScope','$location', function($scope, $http,$rootScope,$location)
{

  $rootScope.apiAddress = apiAddress;

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // called when a state change
  });
  $rootScope.$on('$stateChangeSuccess', function (event) {
    // called when a state has changed
  });

  $(".menu-btn").click(function(){
    $(this).toggleClass("opened");
    $(".menu").toggleClass("opened");
  });

}]);
