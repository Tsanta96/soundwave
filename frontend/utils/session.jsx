export const postUser = user => (
    $.ajax({
        method: 'POST',
        url: 'api/sessions'
    })
)