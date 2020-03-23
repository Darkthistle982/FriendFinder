const path = require("path");
const friends = require('../data/friends');

module.exports = function(app) {
  app.get("/api/friends", function(request, response) {
      return response.json(friends);
  });

  app.post("/api/friends", function(request, response) {
      let maxDifference = 50;
      let matchedCharacter;
      let currentFriend = request.body;

      console.log("Current friend: " + currentFriend.name + "\n");
      friends.forEach(function (friend) {
        let difference = 0;
        for (i = 0; i < friend.scores.length; i++) {
          difference += Math.abs(friend.scores[i] - currentFriend.scores[i]);
        }
        if (difference < maxDifference) {
          maxDifference = difference;
          matchedCharacter = friend;
        };
      });
      response.json(matchedCharacter);
      friends.push(request.body);
  });





};
