app.controller('loginCtrl', function($scope,$state,$rootScope,$http)
{
  $scope.loginInfos = {};
  $scope.processing = false;
  $scope.success = false;
  $scope.loginButtonLabel = "Connexion";
  $scope.loginError = false;
  $scope.sendlogin = function(){
    $scope.processing = true;
    $scope.loginError = false;
    $scope.loginButtonLabel = "Traitement...";
    $http({
      method: 'POST',
      url: $rootScope.apiAddress+'/login_check',
      data : $scope.loginInfos
    }).then(function successCallback(response) {
      console.log(response);
        $scope.processing = false;
        $scope.loginButtonLabel = "Connexion";
        $scope.success = true;
        $state.go("main");
      }, function errorCallback(response) {
        $scope.processing = false;
        $scope.loginButtonLabel = "Connexion";
        $scope.loginError = response.data;
        console.log(response);
      });
  }
});
