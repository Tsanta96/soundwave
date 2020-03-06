json.set! @comment.id do 
    json.id @comment.id 
    json.body @comment.body
    json.authorId @comment.author_id
    json.userName @comment.author.username
    json.trackName @comment.track.title
    json.trackImg url_for(@comment.track.img_file)
    json.trackId @comment.track_id
end 
