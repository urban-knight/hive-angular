module.exports = {
    apply(app) {
        const path = require('path');
        const express = require('express');
        app.use('/static', express.static(path.join(appRoot, 'public')));
        app.use('/', express.static(path.join(appRoot, 'dist')));
    }
};