export const fetchArtistTracks = artistId => (
    $.ajax({
        method: 'GET',
        url: `api/artists/${artistId}/artist-tracks`
    })
)