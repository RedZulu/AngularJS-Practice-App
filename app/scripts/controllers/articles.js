'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.oneAtATime = true;
    $scope.posts = [
      {
        id:0,
        title:'Almonds are good for Health',
        content:'Almonds contain high amounts of HDL which helps reduce cholestrol.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue.'
      },
      {
        id:1,
        title:'Sugar is bad for health',
        content:'Sugar besides being bad for diabetes, it also causes overweight and obesity problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in.'
      },
      {
        id:2,
        title:'Cut down your carbs!!!',
        content:'Watch out for carbs!'
      }
    ];
  });
