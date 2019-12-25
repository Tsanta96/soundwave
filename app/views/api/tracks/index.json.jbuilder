json.array! @tracks do |track|
    json.set! track.id do
        json.id track.id
        json.title track.title
        json.artistId track.artist_id
        json.imgUrl track.img_url
        json.trackFile url_for(track.track_file)
    end
end