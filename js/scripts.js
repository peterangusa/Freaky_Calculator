//This function hides a button once clicked
$(document).ready(function(){
  $("[type = 'button']").click(function(){
    $(this).hide();
  });
});
