var websocket = require('websocket-stream');
var inject = require('reconnect-core');

module.exports = inject(function () {
  var args = [].slice.call(arguments);
  return websocket.apply(null, args);
});