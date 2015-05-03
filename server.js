'use strict';

var express = require('express');

var app = express();

app.set('showStackError', true);

// set .html as the default extension
app.set('view engine', 'html');

app.configure(function() {
    // Setting the static folder
    app.use(express.static(__dirname + '/'));

    // Assume 404 since no middleware responded
    app.use(function(req, res) {
        res.status(404).json('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
});
app.listen(3000);
console.log('Express app started on port 3000');

module.exports = app;
