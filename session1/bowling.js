// code here

var Bowling = function () {

};

Bowling.prototype.result = function (game) {
  var result = 0;
  var lastPlayed ;

  for(var i = 0; i < game.length; i++) {

    //get current value
    var currentPlay = parseInt(game[i], 10);

    // console.log(lastPlayed);
    if (lastPlayed === '/') {
     //double current play if last is spare
     result += currentPlay + 10;
    }


    if (isNaN(currentPlay)) {
      //remove the value of last play (sum 10)
      result += 10 - lastPlayed;
    } else {


      //sum current value to total
      result += currentPlay;
    }
   
   //save lastPlay to next iteration
   lastPlayed = currentPlay;

  }
  return result;
};

module.exports = Bowling;