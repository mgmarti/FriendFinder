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
        //Takes the result of the user's survey 
        let newFriendScore = req.body.scores;

        const scores = [];
        let bestMatch = 0;


        //Loops through current friends
        for (let i = 0; i < friends.length; i++) {
            //Tracks difference between user answer
            let totalDifference = 0;

            //Loops through scores
            for (let j = 0; j < newFriendScore.length; j++) {

                //Calclulate difference and stores into totalDifference. Math.abs to prevent negative values.
                totalDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScore[j])));
            }
            //Adds result of totalDifference to scores
            scores.push(totalDifference);
        }

        for (let i = 0; i < scores.length; i++) {
            if (scores[i] <= scores[bestMatch]) {
                bestMatch = i;
            }
        }

        let yourMatch = friends[bestMatch];
        res.json(yourMatch);

        friends.push(req.body);

    });
    
}