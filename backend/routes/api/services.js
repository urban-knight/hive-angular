const express = require('express');
const router = express.Router();
const models = require("../../models");
const wrap = require("../../middleware/async-wrapper.js");

router.get('/', wrap(async (req, res) => {
    let lang = req.query.lang || 'en';
    let services = await models.Service.findAsync({});
    return res.json({
        Message: 'success',
        services: services.map(s => s[lang])
    });
}));

router.get('/:id', wrap(async (req, res) => {
    let service = await models.Service.findByIdAsync(req.params.id);
    return res.json({ service });
}));

module.exports = router;
