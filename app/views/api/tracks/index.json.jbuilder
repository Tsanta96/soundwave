json.array! @tracks do |track|
    json.set! track.id do
        json.title track.title
        json.artisId track.artist_id
        json.imgUrl track.img_url
        json.trackUrl track.track_url
    end
end