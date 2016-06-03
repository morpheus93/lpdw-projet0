app.controller('projectCtrl', function($scope,$state,$rootScope,$http)
{
  $http({
  method: 'GET',
  url: $rootScope.apiAddress+'/projects'
}).then(function successCallback(response) {
  console.log(response);
  $scope.project = response;
  }, function errorCallback(response) {
    console.log(response);
    $state.go('main');
  });
});
