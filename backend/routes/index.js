module.exports = {
    apply: async (app) => {
        // const models = require("../models");
        const config = require("../config/app.json");
        // const builder = require("../utils/builder.js");
        const path = require('path');

        // app.use("/pictures", require("../routes/pictures"));
        // app.use("/cms", require("../routes/cms"));
        // var langs = config.langs;
        // var subdirs = await builder.collectLangSubdirs(config.defaultLang, langs);
        // subdirs.push("/");

        // var router = await builder.baseRouter(config, models);

        // app.use(subdirs, router);

        // Add 404 for anything else
        
        app.use("*", (req, res) => {
            return res.sendFile(path.join(appRoot, 'dist', 'hive-web-studio', 'index.html'));
        });
    }
};