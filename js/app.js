var PULSEBALL = new PulseBall();
var initialRankingTable = [{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 },{ "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 53.68 }, { "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 51.59 }, { "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }];

var appendNewRankingTable = function(){
  PULSEBALL.rankingsTable.forEach(function(object){
    $('#ranking-table').append('<tr> <td>' + object.team.name + '</td>' + '<td>' + object.pts.toFixed(2) + '</td></tr>');
  });
};

var findCity = function(country){
  switch(country){
    case "Australia":
      return "Sydney";
    case "England":
      return "London";
    case "New Zealand":
      return "Wellington";
    case "France":
      return "Paris";
    case "Romania":
      return "Bucharest";
    default:
      return "n/a"
  };
};

$(function(){
  PULSEBALL.init(initialRankingTable);
  appendNewRankingTable();

  $('#new-match').on('submit', function(){
    event.preventDefault();

    var firstTeam   = $('#first-team').val();
    var secondTeam  = $('#second-team').val();
    var hostCountry = $('#host-country').val();
    var outcome     = $('#outcome').val();

    var newMatch = {"matchId": 2524, "description": "Match 2", "venue": { "id": 900, "name": "Stadium", "city": findCity(hostCountry), "country": hostCountry}, "teams": [{"id": 2, "name": firstTeam, "abbreviation": firstTeam.substring(0,3).toUpperCase() }, { "id": 1, "name": secondTeam, "abbreviation": secondTeam.substring(0,3).toUpperCase() } ], "scores": [ 19, 23 ], "status": "C", "outcome": outcome };

    console.log(newMatch)

  });

});

