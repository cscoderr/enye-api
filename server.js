const http = require('http');
const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes/api');
const mainRoutes = require('./routes/main');
const rateLimit = require('express-rate-limit');

const app = express();

http.createServer(app);

const reqLogger = morgan('dev');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
});

app.set('port', process.env.PORT || 3000);

app.use(limiter);

app.use(reqLogger);

app.use('/', mainRoutes);

app.use('/api', apiRoutes);

app.listen(app.get('port'), () => {
    console.log("Listening on port " + app.get('port'));
});