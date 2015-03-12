/* global -Promise */
var Promise = require('es6-promise').Promise;
var assign = require('react/lib/Object.assign');

var _callbacks = [];

var Dispatcher = function() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  dispatch: function(payload) {
    _callbacks.forEach(function(callback) { callback(payload); });
  }
});

module.exports = Dispatcher;
