var glob = require("glob")

module.exports = {
  execute: function(cb) {
    return glob('/dev/tty.usbmodem*', cb);
  }
};
