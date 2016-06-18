app.controller('announcementCtrl', function($scope,$state,$rootScope,$http)
{

  var apiUri = $rootScope.apiAddress+'/announcements'+'?access_token='+$rootScope.access_token;
  if($state.params.id){
    apiUri = $rootScope.apiAddress+'/announcements/'+$state.params.id+'?access_token='+$rootScope.access_token;;
  }

  $http({
    method: 'GET',
    url: apiUri
  }).then(function successCallback(response) {
    console.log(response);
    $scope.announcements = response.data;
    }, function errorCallback(response) {
      console.log(response);
      $state.go('main');
    });
});
