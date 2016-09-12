import { Meteor } from 'meteor/meteor';

import { Users } from '../imports/api/users';

Meteor.startup(() => {

  if (Users.find().count() === 0) {

    const users = [{

      'name': 'Dubstep-Free Zone',

      'profession': 'Fast just got faster with Nexus S.'

    }, {

      'name': 'All dubstep all the time',

      'profession': 'Get it on!'

    }, {

      'name': 'Savage lounging',

      'profession': 'Leisure suit required. And only fiercest manners.'

    }];

 

    users.forEach((party) => {

      Users.insert(party)

    });

  }

});

