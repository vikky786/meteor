
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './userList.html';
import { Users } from '../../../api/users';
import { name as userAdd } from '../userAdd/userAdd';
import { name as Remove } from '../userRemove/userRemove';

class userList {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.helpers({
      users() {
        return Users.find({});
      }
    });
  }
}
const name = 'userList';

// create a module
export default angular.module(name, [
  angularMeteor,
   uiRouter,
  userAdd,
  Remove
]).component(name, {
  template,
  controllerAs: name,
  controller: userList

})
.config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('users', {
      url: '/users',
      template: '<user-list> </user-list>'
    });
}

