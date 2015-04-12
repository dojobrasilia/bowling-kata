// code here

var Bowling = function () {

};

Bowling.prototype.result = function ( jogadas ) {
  var total = 0;

  var firstPlay = parseInt(jogadas[0]);
  var secondPlay = 0;

  // if(jogadas[1] === '-')
  // {
  //   total = firstPlay;
  // }
  // else
  // {
  //   secondPlay = parseInt(jogadas[1]);
  //   total = firstPlay + secondPlay;
  // }

  for(var i = 0; i < jogadas.length; ++i)
  {
    if(jogadas[i] === '-')
    {
      continue;
    }else{

      total += parseInt(jogadas[i]);
    }

  }

  return total;
};

module.exports = Bowling;

