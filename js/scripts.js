// value 1 = C#, value 2 = Python, value 3 = Ruby

$(document).ready(function() {

  $("#progSurvey").submit(function(event){

    event.preventDefault();

    var inputGoal = $("#goalResult").val();
    var inputBrackets = $("#bracketResult").val();
    var inputReptile = $("#reptileResult").val();
    var inputThink = $("#thinkResult").val();
    var inputJoke = $("#jokeResult").val();
    
    console.log(inputGoal, inputBrackets, inputReptile, inputThink, inputJoke);

    if (inputGoal == 1 && inputBrackets == 1 || inputBrackets == 1 && inputReptile == 1 || inputGoal == 1 && inputReptile == 1) {
      $(".cSharp").show();
      $(".ruby").hide();
      $(".python").hide();
    }

    else if (inputGoal == 2 && inputBrackets == 2 || inputBrackets == 2 && inputReptile == 2 || inputGoal == 2 && inputReptile == 2) {
      $(".cSharp").hide();
      $(".ruby").show();
      $(".python").hide();
    }

    else if (inputGoal == 3 && inputBrackets == 3 || inputBrackets == 3 && inputReptile == 3 || inputGoal == 3 && inputReptile == 3) {
      $(".csharp").hide();
      $(".ruby").hide();
      $(".python").show();
    }

    else {alert("NOPE")}
  });

});