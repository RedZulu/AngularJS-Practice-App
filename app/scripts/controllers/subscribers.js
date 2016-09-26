'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('SubscribersCtrl', function ($scope, $http, $uibModal) {
    $http.get('http://localhost:9000/subscribers.json').success(function(data){
      $scope.subscribers = data;
    });

    $scope.gridOptions = {
      data: 'subscribers',
      showGroupPanel: true,
      columnDefs: [
        {field:'no', displayName:'No.'},
        {field:'name', displayName:'Name'},
        {field:'userType', displayName:'Subscription Type'},
        {field:'loyalty', displayName:'Loyalty Score'},
        {field:'joinDate', displayName:'Date of Joining'}]
    };

    $scope.showModal=function () {
      $scope.newUser={};
      var uibModalInstance = $uibModal.open({
        templateUrl: 'views/add-user.html',
        controller:'AddNewUserCtrl',
        resolve: {
           newUser: function () {
             return $scope.newUser;
           }
        }
      });

      uibModalInstance.result.then(function (selectedItem) {
        $scope.subscribers.push({
          no:$scope.subscribers.length+1,
          name:$scope.newUser.name,
          userType:$scope.newUser.userType,
          loyalty:$scope.newUser.loyalty,
          joinDate:$scope.newUser.joinDate
        });
      });
    };
  }).controller('AddNewUserCtrl', function ($scope, $uibModalInstance, newUser) {
    $scope.newUser=newUser;
    $scope.saveNewUser=function(){
      if ($scope.userForm.$valid) {
        $uibModalInstance.close(newUser);
      }
    };

    $scope.cancel =function(){
      $uibModalInstance.dismiss('cancel');
    };
  });
