
$(function() {

var user_list = $("#user-search-result");

function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ user.name }</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
              </div>`
  user_list.append(html);
}

var member_list = $("#member-added")

function addUserToGroup(userID, userName) {
  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${ userID }'>
                <p class='chat-group-user__name'>${ userName }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
  member_list.append(html)
}

  $("#user-search-field").on("keyup", function(e) {
    e.preventDefault();
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      users.forEach(function(user){
        appendUser(user);
      });
    })
    .fail(function(){
      alert('error');
    })
  });

  $('#user-search-result').on('click', '.user-search-add', function(){
    var userID = $(this).data('user-id');
    var userName = $(this).data('user-name');
    var html = addUserToGroup(userID, userName);
    $("#member-added").append(html);
    $(this).parent().remove();
  })

  $('#member-added').on('click', '.user-search-remove', function(){
    $(this).parent().remove();
  })
});


