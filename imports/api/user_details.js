import { Mongo } from 'meteor/mongo';
export const Users_Details = new Mongo.Collection('user_details');

Users_Details.allow({
  insert(userId, doc) {
    return userId ;
  },
  update(userId, user, fields, modifier) {
    return userId && user.owner === userId;
  },
  remove(userId, user) {
    return userId && user.owner === userId;
  }
});