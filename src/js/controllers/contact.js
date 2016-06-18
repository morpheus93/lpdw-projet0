app.controller('contactCtrl', function($scope,$state,$rootScope)
{
  $scope.contact = {};
  $scope.processing = false;
  $scope.success = false;
  $scope.contactButtonLabel = "Envoyer";
  $scope.contactError = false;
  $scope.sendContact = function(){
    $scope.processing = true;
    $scope.contactError = false;
    $scope.contactButtonLabel = "Traitement...";
    $http({
      method: 'POST',
      url: $rootScope.apiAddress+'/contact_check',
      data : $scope.contact
    }).then(function successCallback(response) {
      console.log(response);
        $scope.processing = false;
        $scope.contactButtonLabel = "Envoyer";
        $scope.success = true;
        $state.go("main");
      }, function errorCallback(response) {
        $scope.processing = false;
        $scope.contactButtonLabel = "Envoyer";
        $scope.contactError = response.data;
        console.log(response);
      });
  }
});
