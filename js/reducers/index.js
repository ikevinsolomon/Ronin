/**
* @flow
 */

'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
  config: require('./config'),
  notifications: require('./notifications'),
  maps: require('./maps'),
  sessions: require('./sessions'),
  user: require('./user'),
  topics: require('./topics'),
  filter: require('./filter'),
  navigation: require('./navigation'),
});
