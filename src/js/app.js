var app = angular.module('projet2', [
'ui.router',
'ui.bootstrap',
'LocalStorageModule'
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
    .state('endingSignup', {
      url: "/signup/ending",
      templateUrl: "views/ending_signup.html",
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
    .state('account', {
      url: "/account/:id",
      templateUrl: "views/users.html",
      controller : "accountCtrl"
    })
    .state('editProfil', {
      url: "/profile/edit",
      templateUrl: "views/edit_profil.html",
      controller : "accountCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html",
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

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('colab');
});

app.controller('mainCtrl', ['$scope', '$http','$rootScope','$location','localStorageService', function($scope, $http,$rootScope,$location,localStorageService)
{
  var apiAddress = "http://"+$location.host()+":"+$location.port()+"/api";
  $rootScope.apiAddress = apiAddress;
  $rootScope.access_token = "";
  $rootScope.logged = false;

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // called when a state change
  });
  $rootScope.$on('$stateChangeSuccess', function (event) {
    // called when a state has changed
  });

  //
  //  Login checker
  //

  var at = localStorageService.get("access_token");
  if(at){
    $rootScope.access_token = at;
    $rootScope.logged = true;
  }

  $rootScope.logout = function(){
    if(confirm("Voulez-vous vraiment vous déconnecter ?")){
      $rootScope.access_token = "";
      $rootScope.logged = false;
      localStorageService.remove("access_token");
      location.reload();
    }
  }


  $(".menu-btn").click(function(){
    $(this).toggleClass("opened");
    $(".menu").toggleClass("opened");
  });

}]);
