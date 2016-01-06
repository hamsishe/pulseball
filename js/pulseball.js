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
  var host               = match.venue.country;
  var firstTeamIndex     = this.getRankingTableIndex(firstTeam);
  var secondTeamIndex    = this.getRankingTableIndex(secondTeam);
  var ratingDifference   = Math.abs(this.ratingDifference(firstTeamIndex, secondTeamIndex, host));

  if (ratingDifference>=10) ratingDifference = 10;

  console.log(this.rankingsTable);
    
  this.updateRankingTable(firstTeamIndex, secondTeamIndex, outcome, ratingDifference);

};

PulseBall.prototype.updateRankingTable = function(firstTeamIndex, secondTeamIndex, outcome, difference){
  var pointsWhenWinner = parseFloat((1 - (difference/10)).toFixed(2));
  var pointsWhenDraw   = parseFloat((difference/10).toFixed(2));
  switch(outcome){
    case "A":
      this.rankingsTable[firstTeamIndex].pts  += pointsWhenWinner;
      this.rankingsTable[secondTeamIndex].pts -= pointsWhenWinner;
      break;
    case "B":
      this.rankingsTable[firstTeamIndex].pts  -= pointsWhenWinner;
      this.rankingsTable[secondTeamIndex].pts += pointsWhenWinner;
      break;
    case "D":
      this.rankingsTable[firstTeamIndex].pts  += pointsWhenDraw;
      this.rankingsTable[secondTeamIndex].pts += pointsWhenDraw;
      break;
  };
  console.log(this.rankingsTable);
};

PulseBall.prototype.getRankingTableIndex = function(team){
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