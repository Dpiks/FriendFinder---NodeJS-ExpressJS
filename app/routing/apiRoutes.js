var friendsList=require("../data/friends.js");

module.exports=function(app){
	app.get("/api/friends",function(req,res){
		res.json(friendsList);
	})

	app.post("/api/friends",function(req,res){
		var matchedFriend={
			name:"",
			photo:"",
			difference:1000
		}
		console.log(req.body);

		var userDetails=req.body;
		var userScores=userDetails.scores;

		console.log(userScores);

		var scoreDifference=0;
		for(let i=0;i<friendsList.length;i++){
			console.log(friendsList[i]);
			scoreDifference=0;

			for(let j=0;j<friendsList[i].scores[j];j++){
				scoreDifference=Math.abs(parseInt(userScores[j]-parseInt(friendsList[i].scores[j])));
				if(scoreDifference<=matchedFriend.difference){
					matchedFriend.name=friendsList[i].name;
					matchedFriend.photo=friendsList[i].photo;
					matchedFriend.difference=scoreDifference;
				}


			}


		}

		friendsList.push(userDetails);
		res.json(matchedFriend);
	})
}