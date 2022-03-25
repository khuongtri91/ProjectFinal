const homeRouter = require('./home');
const express = require('express');
const loginRouter = require('./login');

function route(app) {
    //app.use('/', homeRouter);
    app.use('/Signin', loginRouter);
}

module.exports = route;