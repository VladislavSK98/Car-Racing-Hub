global.__basedir = __dirname;
require('dotenv').config()
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
const apiRouter = require('./router');
const cors = require('cors');
const config = require('./config/config');
const { errorHandler } = require('./utils');
const { getAllTracks } = require('./controllers/trackController'); 



dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    app.use(cors({
      origin: config, // Разрешава заявки само от фронтенда
    credentials: true
    }));

    app.use('/api', apiRouter);

    app.get('/api/tracks', getAllTracks);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);