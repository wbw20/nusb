var fs   = require('fs');

module.exports = {
  execute: function(port, options) {
    if (!port) { return; }

    fs.createReadStream(port);
    fs.on('data', options.onData);
  }
};
