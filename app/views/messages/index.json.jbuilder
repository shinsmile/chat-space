json.array! @newest_messages do |message|
  json.name message.user.name
  json.created_at message.created_at.to_s(:datetime)
  json.content message.content
  json.url message.image
  json.id message.id
end
