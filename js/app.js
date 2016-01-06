var PULSEBALL = new PulseBall();
var initialRankingTable = [{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },{ "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 53.68 }, { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 51.59 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }];

$(function(){
  PULSEBALL.init(initialRankingTable);
  PULSEBALL.rankingsTable.forEach(function(object){
    $('#ranking-table').append('<tr> <td>' + object.team.name + '</td>' + '<td>' + object.pts.toFixed(2) + '</td></tr>')
  })

});