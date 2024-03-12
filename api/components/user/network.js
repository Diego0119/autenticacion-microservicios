const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', (req, res) => {
    const list = Controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500)
        });
})

router.get('/:id', (req, res) => {
    const user = Controller.get('user', req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });

})

router.get('/', (req, res) => {
    const list = Controller.list();
    response.success(req, res, list, 200);
})

module.exports = router;