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
         let newFriendData = req.body.scores;
       
        //Tracks difference between user answer
        let totalDifference;

        //Loops through current friends
        for (let i = 0; i < friends.length; i++) {

            //Loops through scores
            for (let j = 0; j < friends[i].scores[j]; j++) {

            }

        }
        //Math.abs() to prevent negative values 
        Math.abs()

        //Sends user info to friends data array
        friends.push(newFriendData);
        res.json(newFriendData);
    });

}