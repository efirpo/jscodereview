// value 1 = C#, value 2 = Python, value 3 = Ruby

$(document).ready(function() {

  $("#progSurvey").submit(function(event){

    event.preventDefault();

    var inputGoal = $("#goalResult").val();
    var inputBrackets = $("#bracketResult").val();
    var inputReptile = $("#reptileResult").val();
    var inputThink = $("#thinkResult").val();
    var inputJoke = $("#jokeResult").val();
    
    console.log(inputGoal, inputBrackets, inputReptile, inputThink, inputJoke)

    

  });

});