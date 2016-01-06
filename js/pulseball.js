var PulseBall = function(){
  this.rankingsTable = null;
};

PulseBall.prototype.init = function(rankingJson){
  this.rankingsTable = rankingJson;
};

PulseBall.prototype.addMatch = function(match){
  var firstTeam  = match.teams[0].name;
  var secondTeam = match.teams[1].name;
  var outcome    = match.outcome;
  // var ratingDifference = 
  console.log(this.rankingTablePosition(firstTeam));
  console.log(this.rankingTablePosition(secondTeam));

};

PulseBall.prototype.rankingTablePosition = function(team){
  for (var i = 0; i < this.rankingsTable.length; i++) {
    if(this.rankingsTable[i].team.name === team){
      return i;
    };
  };
};