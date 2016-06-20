app.controller('announcementCtrl', function($scope,$state,$rootScope,$http)
{

 var apiUri = $rootScope.apiAddress+'/announcements'+'?access_token='+$rootScope.access_token;
  if($state.params.id){
    apiUri = $rootScope.apiAddress+'/announcements/'+$state.params.id+'?access_token='+$rootScope.access_token;
  }

  $http({
    method: 'GET',
    url: apiUri
  }).then(function successCallback(response) {
    console.log(response);
    $scope.announcements = response.data;
    }, function errorCallback(response) {
      console.log(response);
      $state.go('login');
    });

    $scope.newAnnouncementInfos = {};
    $scope.processing = false;
    $scope.success = false;
    $scope.newAnnouncementButtonLabel = "Créer mon annonce";
    $scope.newAnnouncementError = false;
    $scope.sendNewAnnouncement = function(){
      $scope.processing = true;
      $scope.newAnnouncementError = false;
      $scope.newAnnouncementButtonLabel = "Traitement...";
      $http({
        method: 'POST',
        url: $rootScope.apiAddress+'/announcements'+'?access_token='+$rootScope.access_token,
        data : $scope.newAnnouncementInfos
      }).then(function successCallback(response) {
        console.log(response);
          $scope.processing = false;
          $scope.newAnnouncementButtonLabel = "Créer mon annonce";
          $scope.success = true;
        }, function errorCallback(response) {
          $scope.success = false;
          $scope.processing = false;
          $scope.newAnnouncementButtonLabel = "Créer mon annonce";
          if(response.data.error){
            $scope.newAnnouncementError = response.data.error.exception[0].message;
          }
          else{
              $scope.newAnnouncementError = response.data;
          }
          console.log(response);
        });
    }
});
