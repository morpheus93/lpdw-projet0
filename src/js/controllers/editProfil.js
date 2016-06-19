app.controller('editProfilCtrl', function($scope,$state,$rootScope,$http)
{
  $scope.profilInfos = {};
  $scope.processing = false;
  $scope.success = false;
  $scope.profilButtonLabel = "Sauvegarder mes informations";
  $scope.profilError = false;
  $scope.sendprofil = function(){
    $scope.processing = true;
    $scope.profilError = false;
    $scope.profilButtonLabel = "Traitement...";
    $http({
      method: 'POST',
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
