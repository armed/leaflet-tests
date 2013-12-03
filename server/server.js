var express = require('express'),
    config = require('./config'),
    app = express();

app.use(express.json())
  .use(express.urlencoded())
  .use(express.compress())
  .use('/assets', express.static(config.client.dist))
  .use('/partials', express.static(config.client.partials))
  .use(app.router);

require('./src/routes')(app);

app.listen(config.server.port, function () {
  console.log('Server listening port:', config.server.port);
});
