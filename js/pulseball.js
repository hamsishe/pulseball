var PulseBall = function(){
  this.rankingsTable = null;
};

PulseBall.prototype.init = function(rankingJson){
  this.rankingsTable = rankingJson;
};

PulseBall.prototype.addMatch = function(match){
  var firstTeam          = match.teams[0].name;
  var secondTeam         = match.teams[1].name;
  var outcome            = match.outcome;
  var host               = match.venue.country
  var firstTeamPosition  = this.rankingTablePosition(firstTeam)
  var secondTeamPosition = this.rankingTablePosition(secondTeam)
  var ratingDifference   = this.ratingDifference(firstTeamPosition, secondTeamPosition, host)

  console.log(ratingDifference);

};

PulseBall.prototype.rankingTablePosition = function(team){
  for (var i = 0; i < this.rankingsTable.length; i++) {
    if(this.rankingsTable[i].team.name === team){
      return i;
    };
  };
};

PulseBall.prototype.ratingDifference = function(firstTeam, secondTeam, host){
  if(this.rankingsTable[firstTeam].team.name === host){
    return parseFloat(((this.rankingsTable[firstTeam].pts+3) - this.rankingsTable[secondTeam].pts).toFixed(2))
  }else if(this.rankingsTable[firstTeam].team.name === host){
    return parseFloat(((this.rankingsTable[firstTeam].pts) - this.rankingsTable[secondTeam].pts+3).toFixed(2))
  }else{
    return parseFloat(((this.rankingsTable[firstTeam].pts) - this.rankingsTable[secondTeam].pts).toFixed(2))
  }
};