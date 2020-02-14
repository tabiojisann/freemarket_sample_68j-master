$(function () {
  $('select').change(function() {
    var val = $(this).val();
    $('p').text(val);
  })
})