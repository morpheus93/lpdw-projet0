app.controller('organizationCtrl', function($scope,$state,$rootScope,$http)
{

  var apiUri = $rootScope.apiAddress+'/associations'+'?access_token='+$rootScope.access_token;

  $http({
    method: 'GET',
    url: apiUri
  }).then(function successCallback(response) {
    console.log(response);
    $scope.organizations = response.data;
    }, function errorCallback(response) {
      console.log(response);
      $state.go('login');
    });
});
