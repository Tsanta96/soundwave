json.array! @comments do |comment|
    json.set! comment.id do 
        json.id comment.id 
        json.body comment.body
        json.authorId comment.author_id
        json.trackId comment.track_id
    end 
end