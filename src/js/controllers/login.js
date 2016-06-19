app.controller('loginCtrl', function($scope,$state,$rootScope,$http,localStorageService)
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
        $rootScope.access_token = response.data.token;
        localStorageService.set("access_token", response.data.token);
        $state.go("main");
        location.reload();
      }, function errorCallback(response) {
        $scope.processing = false;
        $scope.loginButtonLabel = "Connexion";
        if(response.data.error){
          $scope.loginError = response.data.error.exception[0].message;
        }
        else{
          $scope.loginError = response.data.message;
        }
      });
  }
});
