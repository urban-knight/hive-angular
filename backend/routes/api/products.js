const express = require('express');
const router = express.Router();
const models = require("../../models");
const wrap = require("../../middleware/async-wrapper.js");

router.get('/', wrap(async (req, res) => {
    let products = await models.Product.findAsync({});
    return res.json({ products });
}));

router.get('/:id', wrap(async (req, res) => {
    let product = await models.Product.findByIdAsync(req.params.id);
    return res.json({ product });
}));

module.exports = router;
