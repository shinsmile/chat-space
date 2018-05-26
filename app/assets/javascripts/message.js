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
                <%= image_tag message.image, class: 'lower-message__image' if message.image.present? %>
                <p class="lower-message__image">${ message.image }</p>
              </div>`
  message_list.update(html);
}

// function showMessage(){
//   var message_id = $('.jsMessage:last').data('id');
//   console.log(location.href)
//   return false;
//   $.ajax({
//     url: location.href,
//     type: 'GET',
//     data: { message: { id: message_id } },
//     dataType: 'json'
//   })
//   .done(function(messages) {
//     messages.forEach(function(message){
//       setMessage(message);
//     });
//   })
// }

// setInterval(showMessage, 3000)

});
