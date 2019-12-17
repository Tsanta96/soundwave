//signup user
export const postUser = user => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: { user }
    })
)

//login user
export const postSession = user => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user }
    })
)

//logout user
export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
)