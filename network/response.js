exports.success = (req, res, message, status) => {
    let statusCode = status || 200;
    res.status(status).send({
        error: false,
        status: statusCode,
        body: message
    })
}

exports.error = (req, res, message, status) => {
    let statusCode = status || 500;

    res.status(status).send({
        error: true,
        status: statusCode,
        body: message
    })
}