## HTML

+ `GET /` `StaticPagesController#root`


## API Endpoints

### `users`
+ `GET /api/users/:id` - returns the user information 
+ `POST /api/users` - sign up/ create user
+ `PATCH /api/user/:id/edit` - edit user information

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `tracks`
+ `GET /api/tracks` - returns relevant tracks (filtered by `data`/`params`)
+ `GET /api/tracks/:id` - returns a track
+ `POST /api/tracks` - creates a track
+ `DELETE /api/tracks/:id` - remove a track
+ `PATCH /api/tracks/:id/edit` - edit track information

### `albums`
+ `GET /api/albums` - returns relevant albums (filtered by `data`/`params`)
+ `GET /api/albums/:id` - returns an album
+ `POST /api/albums` - creates an album
+ `DELETE /api/albums/:id` - remove an album

### `comments`
+ `GET /api/comments`
+ `POST /api/comments`

### `likes`
+ `POST /api/tracks/:track_id/likes` - like a track
+ `DELETE /api/tracks/:track_id/likes` - unlike a track