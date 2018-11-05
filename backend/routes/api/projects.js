const express = require('express');
const router = express.Router();
const models = require("../../models");
const wrap = require("../../middleware/async-wrapper.js");

router.get('/', wrap(async (req, res) => {
    let projects = await models.Project.findAsync({});
    return res.json({ projects });
}));

router.get("/:id", wrap(async (req, res) => {
    let project = await models.Project.findByIdAsync(req.params.id);
    return res.json({ project });
}));

module.exports = router;
