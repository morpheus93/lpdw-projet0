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
