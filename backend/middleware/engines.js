module.exports = {
    apply(app) {
        const bodyParser = require('body-parser');
        const methodOverride = require('method-override');
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(methodOverride("_method"));
    }
};