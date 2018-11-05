module.exports = {
    apply: async (app) => {
        const path = require('path');
        app.use('/api', require('./api'));
        app.use('/pictures', require('./pictures'));
        app.use('*', (req, res) => {
            return res.sendFile(path.join(appRoot, 'dist', 'index.html'));
        });
    }
};