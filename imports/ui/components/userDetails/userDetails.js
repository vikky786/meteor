import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Users } from '../../../api/users';
import template from './userDetails.html';
 
class UserDetails {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.userId = $stateParams.userId;

    this.helpers({
        user(){
          return Users.findOne({
              _id:$stateParams.userId
          })
        }
        
   });
   
  }

  save(){
      Users.update({
          _id:this.userId,
      },
      {
          $set:{
             name: this.user.name,
        profession: this.user.profession,
        degree: this.user.degree

          }
      }, (error) => {
      if (error) {
        console.log('Oops, unable to update the party...');
      } else {
        console.log('Done!');
      }
      })
  }
}
 
const name = 'userDetails';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: UserDetails
})
.config(config);
 
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('userDetails', {
    url: '/users/:userId',
    template: '<user-details></user-details>'
  });
}