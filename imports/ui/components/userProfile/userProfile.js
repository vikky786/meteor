import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
 //import { Users_profile } from '../../../api/usersprofile';
import template from './userProfile.html';
import { Users_Details } from '../../../api/user_details';
 
class UserProfile {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
   this.user_pro = {};

    this.helpers({
        user(){
          return  Meteor.user()
             
         
        }

        
        
   });
   console.log(Meteor.user())
  }

  save(){
    console.log(this.user_pro)
    this.user_pro.userid = Meteor.user()._id
      Users_Details.insert(this.user_pro)
  }
}
 
const name = 'userProfile';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: UserProfile
})
.config(config);
 
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('userProfile', {
    url:'/profile',
    template: '<user-profile></user-profile>'
  });
}