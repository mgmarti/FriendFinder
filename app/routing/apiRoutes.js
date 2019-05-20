const friends = require('./../data/friends');
module.exports = function (app) {

//Display friends list
// =============================================================
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});


}