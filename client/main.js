import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as Socially } from '../imports/ui/components/socially/socially';

angular.module('social', [
  angularMeteor,
  Socially
]);