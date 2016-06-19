app.controller('projectCtrl', function($scope,$state,$rootScope,$http)
{

  var apiUri = $rootScope.apiAddress+'/projects'+'?access_token='+$rootScope.access_token;
  if($state.params.id){
    apiUri = $rootScope.apiAddress+'/projects/'+$state.params.id+'?access_token='+$rootScope.access_token;
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

    //retreive the promise informations if promiseId is given
    if($state.params.promiseId && $state.params.id){
      $http({
        method: 'GET',
        url: apiUri = $rootScope.apiAddress+'/projects/'+$state.params.id+'/promises/'+$state.params.promiseId
      }).then(function successCallback(response) {
        console.log("promise :");
        console.log(response);
        $scope.promise = response.data;
        }, function errorCallback(response) {
          console.log(response);
        });
    }

    $scope.newProjectInfos = {};
    $scope.processing = false;
    $scope.success = false;
    $scope.newProjectButtonLabel = "Créer mon projet";
    $scope.newProjectError = false;
    $scope.sendNewProject = function(){
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

    $scope.sendNewPromise = function(){
      $scope.processing = true;
      $scope.newPromiseError = false;
      $scope.newPromiseButtonLabel = "Traitement...";
      $http({
        method: 'POST',
        url: $rootScope.apiAddress+'/projects/'+$scope.newPromiseInfos.project+'/promises',
        data : $scope.newPromiseInfos
      }).then(function successCallback(response) {
        console.log(response);
          $scope.processing = false;
          $scope.newPromiseButtonLabel = "Créer mon projet";
          $scope.success = true;
        }, function errorCallback(response) {
          $scope.success = false;
          $scope.processing = false;
          $scope.newPromiseButtonLabel = "Créer mon projet";
          if(response.data.error){
            $scope.newPromiseError = response.data.error.exception[0].message;
          }
          else{
              $scope.newPromiseError = response.data;
          }
          console.log(response);
        });
    }
});
