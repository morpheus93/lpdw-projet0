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
      $state.go('endingSignup');
    });

    $scope.profilInfos = {};
    $scope.processing = false;
    $scope.success = false;
    $scope.profilButtonLabel = "Sauvegarder mes informations";
    $scope.profilError = false;
    $scope.editProfil = function(){
      $scope.processing = true;
      $scope.profilError = false;
      $scope.profilButtonLabel = "Traitement...";
      $http({
        method: 'PATCH',
        url: $rootScope.apiAddress+'/accounts',
        data : $scope.profilInfos
      }).then(function successCallback(response) {
        console.log(response);
          $scope.processing = false;
          $scope.profilButtonLabel = "Sauvegarder mes informations";
          $scope.success = true;
        }, function errorCallback(response) {
          $scope.success = false;
          $scope.processing = false;
          $scope.profilButtonLabel = "Sauvegarder mes informations";
          if(response.data.error){
            $scope.profilError = response.data.error.exception[0].message;
          }
          else{
              $scope.profilError = response.data;
          }
          console.log(response);
        });
    }
});
