$(document).ready(function(){
  $("form#stress_test_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=stress-warning]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=stress-symptom]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $("#third-response").show();
    $("input:checkbox[name=stress-coping]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('stress_test_survey').hide();
  });
});
