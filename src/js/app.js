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
    })
    .state('organization', {
      url: "/organizations/:id",
      templateUrl: "views/organizations.html",

    })
    .state('user', {
      url: "/users/:id",
      templateUrl: "views/users.html",

    })
    .state('editProfil', {
      url: "/profile/edit",
      templateUrl: "views/edit_profil.html",

    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/users.html",

    })
    .state('projects', {
      url: "/projects",
      templateUrl: "views/projects/list.html",
    })
    .state('projects.item', {
      url: "/:id",
      templateUrl: "views/projects/project.html",
    })
    .state('user', {
      url: "/users/:id",
      templateUrl: "views/users.html",

    })
    .state('search', {
      url: "/search/:query",
      templateUrl: "views/search.html",

    });
});

app.controller('mainCtrl', ['$scope', '$http','$rootScope','$location', function($scope, $http,$rootScope,$location)
{
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // called when a state change
  });
  $rootScope.$on('$stateChangeSuccess', function (event) {
    // called when a state has changed
  });

}]);
