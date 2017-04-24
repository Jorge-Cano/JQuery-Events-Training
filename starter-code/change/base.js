console.log("Check, Check, 1,2,3..: JS is working!");
$(document).ready(function(){
  $("#time").text( Date.now()
);
  $('#total').after('<input type="reset" id="reset">')
  $('.add').on('change', function() {
    var lnum=Number($('#left').val());
    var rnum=Number($('#right').val());
    var total= lnum+rnum;
    $('#total').val(total);
  });
  $('#reset').on('click', function() {
    $('#total').val('');
    $('#left').val('');
    $('#right').val('');
  });
});
