const express = require('express');
const path = require('path');
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes(app);
// apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});