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
        let newFriend = req.body;
        let newFriendScore = [];
        let totalDifference;
        


            for (var i = 0; i < .length; i++) {
                for (var i = 0; i < .length; i++) {
                
                }
            }
              


        //Sends user info to friends data array
        friends.push(newFriend);
        res.json(newFriend);
    });

}

