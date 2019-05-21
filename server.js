// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//Routes
// =============================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);