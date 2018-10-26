const middlewares = [
    require('./engines'),
    require('./database'),
    require('./filesystem'),
    require('./cookie-session'),
    require('./multer'),
    require('../routes'),
    require('./errors')
]

module.exports = {
    apply: async (app) => {
        for (m of middlewares) {
            await m.apply(app);
        }
    }
};