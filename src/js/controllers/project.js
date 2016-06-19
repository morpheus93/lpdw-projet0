app.controller('projectCtrl', function($scope,$state,$rootScope,$http)
{

  var apiUri = $rootScope.apiAddress+'/projects'+'?access_token='+$rootScope.access_token;
  if($state.params.id){
    apiUri = $rootScope.apiAddress+'/projects/'+$state.params.id+'?access_token='+$rootScope.access_token;;
  }

  $http({
    method: 'GET',
    url: apiUri
  }).then(function successCallback(response) {
    console.log(response);
    $scope.projects = response.data;
    }, function errorCallback(response) {
      console.log(response);
      $state.go('main');
    });

    $scope.newProjectInfos = {};
    $scope.processing = false;
    $scope.success = false;
    $scope.newProjectButtonLabel = "Créer mon projet";
    $scope.newProjectError = false;
    $scope.sendnewProject = function(){
      $scope.processing = true;
      $scope.newProjectError = false;
      $scope.newProjectButtonLabel = "Traitement...";
      $http({
        method: 'POST',
        url: $rootScope.apiAddress+'/projects',
        data : $scope.newProjectInfos
      }).then(function successCallback(response) {
        console.log(response);
          $scope.processing = false;
          $scope.newProjectButtonLabel = "Créer mon projet";
          $scope.success = true;
        }, function errorCallback(response) {
          $scope.success = false;
          $scope.processing = false;
          $scope.newProjectButtonLabel = "Créer mon projet";
          if(response.data.error){
            $scope.newProjectError = response.data.error.exception[0].message;
          }
          else{
              $scope.newProjectError = response.data;
          }
          console.log(response);
        });
    }
});
