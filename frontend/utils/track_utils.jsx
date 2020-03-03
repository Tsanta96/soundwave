export const fetchTracks = () => (
    $.ajax({
        method: 'GET',
        url: `api/tracks`
    })
)

//Grab artists tracks
export const fetchArtistTracks = artistId => (
    $.ajax({
        method: 'GET',
        url: `api/tracks/artist_tracks/${artistId}`
    })
)

export const fetchTrack = trackId => (
    $.ajax({
        method: 'GET', 
        url: `api/tracks/${trackId}`
    })
)

export const createTrack = formData => (
    $.ajax({
        method: 'POST',
        url: `api/tracks`,
        data: formData,
        contentType: false, 
        processData: false
    })
);

export const updateTrack = track => (
    $.ajax({
        method: 'PATCH',
        url: `api/tracks/${track.id}`,
        data: track 
    })
)

export const deleteTrack = trackId => (
    $.ajax({
        method: 'DELETE',
        url: `api/tracks/${trackId}`
    })
)


//Search for tracks 
export const searchTracks = searchString => (
    $.ajax({
        method: 'GET',
        url: `api/tracks/search_tracks/${searchString}`
    })
)