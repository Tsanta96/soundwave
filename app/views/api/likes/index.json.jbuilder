json.array! @liked_tracks do |track|
    json.set! track.id do
        json.id track.id
        json.title track.title
        json.artistId track.artist_id
        json.userName track.artist.username
        json.imgFile url_for(track.img_file)
        json.trackFile url_for(track.track_file)
        json.likes track.likes.length
    end
end