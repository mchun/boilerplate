$(document).ready(function(){

  $("#feedback_cancel_btn").click(function(e){
    $("#feedback_txt").val("");
  });

  $("#feedback_form").submit(function(e){
    e.preventDefault();
    $.post("/feedback",{
      "feedback_txt":$('#feedback_txt').val()
    }).done(function() {
      $("#feedback_txt").val("");
      $("#feedback_form").addClass("hidden");
      $("#thankyou_msg").show().fadeOut(1500);
    });
  })
  
});