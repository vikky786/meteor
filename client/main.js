

import angular from 'angular';

import angularMeteor from 'angular-meteor';

 

angular.module('socially', [

  angularMeteor

])
.controller('user',function($scope){
    'ngInject';
        $scope.helpers({

      users() {

        return Users.find({});

      }

    });
})

