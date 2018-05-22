
$(function() {

var message_list = $(".messages");

function setMessage(message) {
  var html = `<div class="message jsMessage" data-id="${message.id}" >
                <div class="upper-message">
                  <div class="upper-message__user-name">${ message.name }</div>
                  <div class="upper-message__date">
                    ${ message.created_at }</div>
                </div>
                <div class="lower-meesage">
                  <p class="lower-message__content">${ message.content }</p>
                </div>
              </div>`
  message_list.append(html);
}

function hoge(){
  var message_id = $('.jsMessage:last').data('id');
  $.ajax({
      url: location.href,
      type: 'GET',
      data: { message: { id: message_id } },
      dataType: 'json'
  })
  .done(function(messages) {
    var id = $('.message').data('messageId');
    messages.forEach(function(message){
      setMessage(message);
    });
  })
}

setInterval(hoge, 3000)

});
