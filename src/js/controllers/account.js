app.controller('accountCtrl', function($scope,$state,$rootScope,$http)
{
  var apiUri = $rootScope.apiAddress+'/me'+'?access_token='+$rootScope.access_token;

  $http({
    method: 'GET',
    url: apiUri
  }).then(function successCallback(response) {
    console.log(response);
    $scope.me = response.data;
    }, function errorCallback(response) {
      console.log(response);
      $state.go('main');
    });
});
