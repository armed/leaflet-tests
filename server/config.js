var path = require('path');

function mkpath (p) {
  return path.resolve(__dirname + p);
}

module.exports = {
  server: {
    port: process.env.PORT || 3000
  },
  client: {
    dist: mkpath('/../client/dist'),
    partials: mkpath('/../client/dist/partials')
  }
};
