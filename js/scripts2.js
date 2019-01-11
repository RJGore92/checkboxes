$(document).ready(function(){
  var stressSignTotal = 0;
  var copingTotal = 0;
  $("form#stress_test_survey").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-warning]:checked").each(function(){
      var stressWarningSign = $(this).val();
      $('#stress-responses').append("Warning sign: " + stressWarningSign + "<br>");
      stressSignTotal++;
    });
    $("input:checkbox[name=stress-symptom]:checked").each(function(){
      var stressSymptoms = $(this).val();
      $('#stress-responses').append("Symptom: " + stressSymptoms + "<br>");
      stressSignTotal++;
    });
    $("#coping-responses").show();
    $("input:checkbox[name=stress-coping]:checked").each(function(){
      var copingMethod = $(this).val();
      $('#coping-responses').append(copingMethod + "<br>");
      copingTotal++;
    });

    $("#stress_test_survey").hide();

    if (copingTotal > stressSignTotal) {
      $("#positive-response").show();
    }
    else if (copingTotal == stressSignTotal) {
      $("#neutral-response").show();
    }
    else {
      $("#warning-response").show();
    }
  });
});
