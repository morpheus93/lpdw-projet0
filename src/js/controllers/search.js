app.controller('searchCtrl', function($scope,$state,$rootScope)
{
  /* WIP
  $scope.sendSearch = function(){
    $http({
      method: 'POST',
      url: $rootScope.apiAddress+'/search',
      data : $scope.loginInfos
    }).then(function successCallback(response) {
      console.log(response);
        $scope.processing = false;
        $scope.loginButtonLabel = "Connexion";
        $scope.success = true;
        $rootScope.access_token = response.data.token;
        localStorageService.set("access_token", response.data.token);
        $state.go("main");
      }, function errorCallback(response) {
        $scope.processing = false;
        $scope.loginButtonLabel = "Connexion";
        $scope.loginError = response.data;
      });
  }*/
});
