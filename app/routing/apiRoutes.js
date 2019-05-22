const friends = require('./../data/friends');
module.exports = function (app) {

    //Display friends list
    // =============================================================
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //Create new friends 
    // =============================================================
    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;

        //Sends user info to friends data array
        friends.push(newfriend);
        res.json(newfriend);
    });

}