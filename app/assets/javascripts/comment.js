$(function(){
  $('.rightContents__form.message').on("keyup", function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
  })
})
