import { Mongo } from 'meteor/mongo';
export const Users = new Mongo.Collection('user');

Users.allow({
  insert(userId, user) {
    return userId && user.owner === userId;
  },
  update(userId, user, fields, modifier) {
    return userId && user.owner === userId;
  },
  remove(userId, user) {
    return userId && user.owner === userId;
  }
});