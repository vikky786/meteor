import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as userList } from '../imports/ui/components/userList/userList';

angular.module('socially', [
  angularMeteor,
  userList
]);