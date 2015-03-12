var Dispatcher = require('./dispatcher');
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(Dispatcher.prototype, {
  handleViewAction: function (action) {
    console.log('action', action);

    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
