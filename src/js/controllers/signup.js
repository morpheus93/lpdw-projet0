app.controller('signupCtrl', function($scope,$state,$rootScope,$http)
{
  $scope.signupInfos = {};
  $scope.processing = false;
  $scope.success = false;
  $scope.signupButtonLabel = "Créer un compte";
  $scope.signupError = false;
  $scope.sendSignup = function(){
    $scope.processing = true;
    $scope.signupError = false;
    $scope.signupButtonLabel = "Traitement...";
    $http({
      method: 'POST',
      url: $rootScope.apiAddress+'/accounts',
      data : $scope.signupInfos
    }).then(function successCallback(response) {
      console.log(response);
        $scope.processing = false;
        $scope.signupButtonLabel = "Créer un compte";
        $scope.success = true;
      }, function errorCallback(response) {
        $scope.processing = false;
        $scope.signupButtonLabel = "Créer un compte";
        $scope.signupError = response.data.error.exception[0].message;
        console.log(response.data);
      });
  }
});
