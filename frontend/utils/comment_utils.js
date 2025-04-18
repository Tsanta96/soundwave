export const fetchComments = (trackId) =>
  $.ajax({
    type: "GET",
    url: `/api/comments/track_comments/${trackId}`,
  });

export const createComment = (comment) =>
  $.ajax({
    type: "POST",
    url: `api/comments`,
    data: { comment },
  });

export const deleteComment = (commentId) =>
  $.ajax({
    type: "DELETE",
    url: `api/comments/${commentId}`,
  });
