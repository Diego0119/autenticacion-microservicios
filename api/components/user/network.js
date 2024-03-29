const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const secure = require('./secure');

const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);


function list(req, res) {
    Controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500)
        });
}

function get(req, res) {
    Controller.get('user', req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
}

function upsert(req, res) {
    Controller.upsert(req.body)
        .then((user) => response.success(req, res, user, 201))
        .catch((error) => {
            response.error(req, res, error.message, 500);
        })
}


module.exports = router;