var path = require("path");
var friends = require(path.join(__dirname, "../data/friends.js"));
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body);
        var name = req.body.name;
        var photo = req.body.photo;
        var q1 = req.body.q1;
        var q2 = req.body.q2;
        var q3 = req.body.q3;
        var q4 = req.body.q4;
        var q5 = req.body.q5;
        var q6 = req.body.q6;
        var q7 = req.body.q7;
        var q8 = req.body.q8;
        var q9 = req.body.q9;
        var q10 = req.body.q10;
        var answers = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

        //count of each q1-q10[index] will be 0 in the matching of friends[i][index]
        var matchingscores = [0,0,0,0,0,0,0,0,0,0];
        for (var i = 0; i < friends.length; i++) {                      
            for(var n = 0; n<10; n++){
                if(friends[i].scores[n]==answers[n]){
                    matchingscores[i]++;
                }   
                }
        }
        // console.log(matchingscores);
        HighestMatchingIndex = 0;
        for(var i=0; i<9; i++){
            // console.log("Matching " + matchingscores[HighestMatchingIndex] + " With " + matchingscores[i]);
            if(matchingscores[HighestMatchingIndex] > Number(matchingscores[i])){

            }else{
                HighestMatchingIndex = i;
            }
        }
        // console.log(HighestMatchingIndex);
        res.json(friends[HighestMatchingIndex]);
    });
}