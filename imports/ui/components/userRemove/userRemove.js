import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './userRemove.html';
import { Users } from '../../../api/users';

class userRemove {
    remove() {
        Users.remove(this.user._id)
       
    }
}

const name = 'userRemove';

export default angular.module(name, [
    angularMeteor,
])
    .component(name, {
        template,
        bindings: {
            user: '<'
        },
        controllerAs: name,
        controller: userRemove
    })