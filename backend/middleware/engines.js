module.exports = {
    apply(app) {
        const bodyParser = require('body-parser');
        const methodOverride = require('method-override');
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(methodOverride("_method"));
    }
};