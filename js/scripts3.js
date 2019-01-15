var luckyLevel = 0;

// function determineFortune(luckyLevel) {
//   if (luckyLevel >= 6) {
//     $("extra-lucky-response").show();
//   }
//   else if (luckyLevel >= 3) {
//     $("#lucky-response").show();
//   }
//   else if (luckyLevel >= 0) {
//     $("#neutral-response").show();
//   }
//   else {
//     $("#unlucky-response").show();
//   }
// }

$(document).ready(function(){
  $("form#fortune_teller_survey").submit(function(event){
    // luckyLevel = 0;
    event.preventDefault();
    $("#unlucky-finds").show();
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      var unluckyEncounter = $(this).val();
      $('#unlucky-finds').append("Unlucky: " + unluckyEncounter + "<br>");
      luckyLevel--;
    });
    $("#lucky-finds").show();
    $("input:checkbox[name=good-luck]:checked").each(function(){
      var luckyEncounter = $(this).val();
      $('#lucky-finds').append("Lucky: " + luckyEncounter + "<br>");
      luckyLevel++;
    });
    $("input:checkbox[name=extra-luck]:checked").each(function(){
      var extraLuckyEncounter = $(this).val();
      $('#lucky-finds').append("Super lucky: " + extraLuckyEncounter + "<br>");
      luckyLevel+=2;
    });
    console.log(luckyLevel);
    if (luckyLevel > 5) {
      $("#extra-lucky-response").show();
    }
    else if (luckyLevel > 2) {
      $("#lucky-response").show();
    }
    else if (luckyLevel > -1) {
      $("#neutral-response").show();
    }
    else {
      $("#unlucky-response").show();
    }
    $("#fortune_teller_survey").hide();

  });
});
