var path = require("path");


// Routes
// =============================================================

module.exports = function(app){
    app.get("/", function (req, res) {
        // res.send("Welcome to Friend Finder!")
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });
    
    app.get("/survey", function (req, res) {
        // res.send("This is survey")
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
