// comment for sake of personal reference.
// value 1 = C#, value 2 = Python, value 3 = Ruby

$(document).ready(function() {

  $("#progSurvey").submit(function(event){

    event.preventDefault();

    var inputGoal = $("#goalResult").val();
    var inputBrackets = $("#bracketResult").val();
    var inputReptile = $("#reptileResult").val();
    var inputThink = $("#thinkResult").val();
    var inputJoke = $("#jokeResult").val();
  
  //  commented out for the sake of clean code.  
  //  console.log(inputGoal, inputBrackets, inputReptile, inputThink, inputJoke);
  
  var inputResult = (inputGoal  + inputBrackets + inputReptile)

    // Will show results based upon survey choices.

    if (jQuery.inArray (inputResult, ["111", "112", "121", "211", "113", "131", "311"]) >=0) {
      $(".cSharp").fadeIn();
      $(".ruby").hide();
      $(".python").hide();
      $(".sorry").hide();
    }

    else if (jQuery.inArray (inputResult, ["222", "221", "212", "122", "223", "232", "322"]) >=0) {
      $(".cSharp").hide();
      $(".ruby").hide();
      $(".python").fadeIn();
      $(".sorry").hide();
    }

    else if (jQuery.inArray (inputResult, ["333", "331", "313", "133", "332", "323", "233"]) >=0) {
      $(".cSharp").hide();
      $(".ruby").fadeIn();
      $(".python").hide();
      $(".sorry").hide();
    }

    else {
      $(".cSharp").hide();
      $(".ruby").hide();
      $(".python").hide();
      $(".sorry").fadeIn();
      $("#joke1").hide();
      $("#joke2").hide();
      $("#joke3").hide();
    }
    
    // Will choose the right joke to put on the bottom of the results.

    if (inputJoke == "blank") {
      $("#joke1").hide();
      $("#joke2").hide();
      $("#joke3").hide();
      $(".cSharp").hide();
      $(".ruby").hide();
      $(".python").hide();
      $(".sorry").fadeIn();
    }

    else if (inputJoke == "1") {
      $("#joke1").fadeIn();
      $("#joke2").hide();
      $("#joke3").hide();
    }

    else if (inputJoke == "2") {
      $("#joke1").hide();
      $("#joke2").fadeIn();
      $("#joke3").hide();
    }

    else if (inputJoke == "3") {
      $("#joke1").hide();
      $("#joke2").hide();
      $("#joke3").fadeIn();
    }

    else {
      $("#joke1").hide();
      $("#joke2").hide();
      $("#joke3").hide();
    }

    // Will change color of joke background depending on result of thinkChoice form question.

    if (inputThink == "blank") {
      $(".cSharp").hide();
      $(".ruby").hide();
      $(".python").hide();
      $("#joke1").hide();
      $("#joke2").hide();
      $("#joke3").hide();
      $(".sorry").fadeIn();
    }
    
    else if (inputThink == 1) {
     $("div#joke1").removeClass();
     $("div#joke1").addClass("jokeyellow");
     $("div#joke2").removeClass();
     $("div#joke2").addClass("jokeyellow");
     $("div#joke3").removeClass();
     $("div#joke3").addClass("jokeyellow");
    }

    else if (inputThink == 2) {
      $("div#joke1").removeClass();
      $("div#joke1").addClass("jokeblue");
      $("div#joke2").removeClass();
      $("div#joke2").addClass("jokeblue");
      $("div#joke3").removeClass();
      $("div#joke3").addClass("jokeblue");
    }

    else if (inputThink == 3) {
      $("div#joke1").removeClass();
      $("div#joke1").addClass("jokeorange");
      $("div#joke2").removeClass();
      $("div#joke2").addClass("jokeorange");
      $("div#joke3").removeClass();
      $("div#joke3").addClass("jokeorange");
    }

  });

});


    // if,else statements commented out to switch functionality to array.

   // if (inputGoal == 1 && inputBrackets == 1 || inputBrackets == 1 && inputReptile == 1 || inputGoal == 1 && inputReptile == 1) {
   //   $(".cSharp").fadeIn();
   //   $(".ruby").hide();
   //   $(".python").hide();
   //   $(".sorry").hide();
   // }

   // else if (inputGoal == 2 && inputBrackets == 2 || inputBrackets == 2 && inputReptile == 2 || inputGoal == 2 && inputReptile == 2) {
   //   $(".cSharp").hide();
   //   $(".ruby").fadeIn();
   //   $(".python").hide();
   //   $(".sorry").hide();
   // }

   // else if (inputGoal == 3 && inputBrackets == 3 || inputBrackets == 3 && inputReptile == 3 || inputGoal == 3 && inputReptile == 3) {
   //   $(".cSharp").hide();
   //   $(".ruby").hide();
   //   $(".python").fadeIn();
   //   $(".sorry").hide();
   // }

   // else {
   //   $(".cSharp").hide();
   //   $(".ruby").hide();
   //   $(".python").hide();
   //   $(".sorry").fadeIn();
   // }

 