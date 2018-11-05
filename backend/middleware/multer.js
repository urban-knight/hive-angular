module.exports = {
    apply(app) {
        const multer = require('multer');
        app.use(multer({
            storage: multer.diskStorage({
                destination: (req, file, callback) => callback(null, path.join(appRoot, 'uploads')),
                filename: (req, file, callback) => {
                    let parsed = path.parse(file.originalname);
                    let filename = parsed.name.replace(/ /g, "_");
                    return callback(null, filename);
                }
            })
        }).any());
    }
};