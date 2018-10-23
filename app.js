const dotenv = require('dotenv').config({ path: './backend/config/.env' });
const path = require('path');
const app = require('express')();
const db = require('./backend/utils/db.js');

let http_port = process.env.APP_HTTP_PORT || 80;
let host = process.env.APP_HOST || "localhost";

global.appRoot = path.resolve(__dirname);

const { apply: applyMiddlewares } = require('./backend/middleware');

applyMiddlewares(app).then(() => {
    app.listen(http_port, () => {
        console.log("Express app is listening on: http://" + host + ":" + http_port);
    });
});

module.exports = app;