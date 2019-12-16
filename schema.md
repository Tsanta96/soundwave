# Database Schema

## `users`
| column name         | data type | details                   |
|:--------------------|:---------:|:--------------------------|
| `id`                | integer   | not null, primary key     |
| `username`          | string    | not null, indexed, unique |
| `email`             | string    | not null, indexed, unique |      
| `img_url`           | string    |                           |  
| `followers_user_ids`| array     |                           | 
| `following_user_ids`| array     |                           | 
| `password_digest`   | string    | not null                  |
| `session_token`     | string    | not null, indexed, unique |
| `created_at`        | datetime  | not null                  |
| `updated_at`        | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `email, unique: true`
+ index on `session_token, unique: true`



## `tracks`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `title`           | string    | not null                       |
| `img_url`         | string    |                                |
| `artist_id`       | integer   | not null, indexed, foreign key |     
| `album_id`        | string    | not null                       |
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ index on `id`
+ index on `artist_id`
+ index on `album_id`



## `albums`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `title`           | string    | not null                       |
| `artist_id`       | integer   | not null, indexed, foreign key |     
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ index on `id`
+ index on `artist_id`



## `playlists`
| column name       | data type | details                         |
|:------------------|:---------:|:--------------------------------|
| `id`              | integer   | not null, primary key           |
| `name`            | string    | not null, unique                |     
| `user_id`         | integer   | not null, indexed, foreign key  | 
| `created_at`      | datetime  | not null                        |
| `updated_at`      | datetime  | not null                        |   

+ index on `id`
+ index on `user_id`



## `likes`
| column name       | data type | details                         |
|:------------------|:---------:|:--------------------------------|
| `id`              | integer   | not null, primary key           |
| `user_id`         | integer   | not null, indexed, foreign key  |
| `track_id`        | integer   | not null, indexed, foreign key  |         
| `created_at`      | datetime  | not null                        |
| `updated_at`      | datetime  | not null                        |

+ index on `id`
+ index on `user_id`
+ index on `track_id`



## `comments`
| column name       | data type | details                         |
|:------------------|:---------:|:--------------------------------|
| `id`              | integer   | not null, primary key           |
| `body`            | text      | not null                        |
| `author_id`       | integer   | not null, indexed, foreign key  |
| `track_id`        | integer   | not null, indexed, foreign key  |         
| `created_at`      | datetime  | not null                        |
| `updated_at`      | datetime  | not null                        |

+ index on `id`
+ index on `author_id`
+ index on `track_id`




  
