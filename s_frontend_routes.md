Our components are organized as follows:

- `Root`
  - `App`
    - `NavBar`
    - (main component goes here)
    - `Footer`

The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

- `/`
  - `Splash/Welcome Page`
- `/signup`
  - `SessionForm`
- `/login`
  - `SessionForm`
- `/discover`
  - `TrackIndex`
    - `TrackPlayer`\*
      - `CommentsComponent`
- `/stream`
  - `StreamFeed`
    - `TrackPlayer`\*
      - `CommentsComponent`
- `/users/:userId`
  - `ProfileComponent`
- `/users/:userId/library`
  - `LikedTracks`
  - `PlaylistFeed`
    - `TrackPlayer`\*
      - `CommentsComponent`
- `/upload`
  - `UploadComponent`

\*TrackPlayer Component below footer
