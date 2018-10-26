module.exports = {
    apply(app) {
        const session = require('express-session');
        const cookieParser = require('cookie-parser');
        app.use(cookieParser('hive-angular'));
        app.use(session({
            secret: 'hive-angular',
            resave: false,
            saveUninitialized: false,
        }));
    }
};