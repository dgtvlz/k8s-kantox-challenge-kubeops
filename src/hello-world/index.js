var express = require('express');
const process = require('process');
const { v4: uuidv4 } = require('uuid');

var expressapp = express();
const uniqueId = uuidv4();

expressapp.get('/', function (req, res) {
    const message = {
        message: 'Hello World JavaScript v2.3',
        id: uniqueId
    };
    res.json(message);
});

expressapp.listen(5000, function () {
    console.log('Ready on port 5000!');
});

/* To Handle Ctrl C */
process.on('SIGINT', function () {
    process.exit();
});