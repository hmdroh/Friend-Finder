# Friend-Finder
Friend Finder - Node and Express Servers

We are trying to match people based on our calculations.

For seeing the deployed version please go to this link:
[Click here to open its deployed version on heroku](https://friend-findertest.herokuapp.com/)


## Installation

Install the following on your local computer:
- [x] Nodejs

run the following command on your terminal on root of the project to install all the packages:
```javascript
npm i
```

## Running it locally
1. After installation is done, tun this command on your terminal:

```javascript
nodemon server.js
```

2. Go to your browser and open this link:
```
http://localhost:8080
```

## Algorithm
This code will execute fore responding with match from friends list:
```javascript
//friends is the api/friends rout
var answers = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
        var matchingscores = [0,0,0,0,0,0,0,0,0,0];
        for (var i = 0; i < friends.length; i++) {                      
            for(var n = 0; n<10; n++){
                if(friends[i].scores[n]==answers[n]){
                    matchingscores[i]++;
                }   
                }
        }

        HighestMatchingIndex = 0;
        for(var i=0; i<9; i++){

            if(matchingscores[HighestMatchingIndex] > Number(matchingscores[i])){

            }else{
                HighestMatchingIndex = i;
            }
        }

        res.json(friends[HighestMatchingIndex]);
```

The friends.js which contains the _friends_ in above code:

```javascript
var friends = [
	{
		name: "TOM Cruies",
		photo: "https://specials-images.forbesimg.com/imageserve/593b2e4b31358e03e55a0e8c/416x416.jpg?background=000000&cropX1=634&cropX2=2468&cropY1=39&cropY2=1874",
		scores: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]	
	},
	{
		name: "Brad Pitt",
		photo: "https://media1.popsugar-assets.com/files/thumbor/O2UDzjNlNogV923szFGpB7BfFV0/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2012/12/51/4/192/1922398/282b643b81f71005_brad.jpg",
		scores: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]	
    },
        .
        .
        .
        .
        .

```

_If you have any more questions please contact me_
_Regards Rohani_