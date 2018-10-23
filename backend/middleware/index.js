const middlewares = [
    require('./engines'),
    require('./filesystem'),
    require('./cookie-session'),
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