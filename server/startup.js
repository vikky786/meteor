import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/users';
import { Users_Details } from '../imports/api/user_details';
Meteor.startup(() => {
   Users.remove({});
  // if (Users_Details.find().count() === 0) {
  //   const users = [{
  //     'userid': Meteor.user()._id,
      
  //   }];
  //   users.forEach((party) => {

  //     Users_Details.insert(party)

  //   });

  // }

});

