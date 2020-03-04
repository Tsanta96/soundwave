export const addLike = (trackId, userId) => (
    $.ajax({
        method: 'POST',
        url: '/api/likes/toggle_like',
        data: { trackId, userId }
    })
)

export const fetchLikedTracks = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/likes/${userId}`
    })
)