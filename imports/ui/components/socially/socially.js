import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './socially.html';
import { name as userList } from '../userList/userList';
import { name as userDetails } from '../userDetails/userDetails';
import { name as userProfile } from '../userProfile/userProfile';
import { name as Navigation } from '../navigation/navigation';
class Socially {}
 
 const name = 'socially';
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  userList,
  userDetails,
  userProfile,
  Navigation,
  'accounts.ui'
])
.component(name,{
    template,
    controllerAs:name,
    controller:Socially
})
 .config(config);
 
function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/users');
}