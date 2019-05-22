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
        let newFriend = req.body.scores;
        let scores = [];
        //Tracks difference between user answer
        let totalDifference = 0;
       
        //Loops through current friends
        for (let i = 0; i < friends.length; i++) {

            //Loops through scores
            for (let j = 0; j < newFriend.length; j++) {
                
            }
        }
//Math.abs() to prevent negative values
Math.abs()

        //Sends user info to friends data array
        friends.push(newFriend);
        res.json(newFriend);
    });

}