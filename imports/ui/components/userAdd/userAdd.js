import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './userAdd.html';
import { Users } from '../../../api/users';

class userAdd {
  constructor() {
    this.user = {};
  }
  submit() {
    this.user.owner = Meteor.user()._id;
    Users.insert(this.user);
    console.log(this.user)
    this.reset();
  }
  reset() {
    this.user = {};
  }
}
const name = 'userAdd';
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: userAdd
})