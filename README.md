# SoundWave

[Live Demo](https://sound-wave-aa.herokuapp.com/#/ 'Live Demo')

SoundWave is a music streaming website inspired by SoundCloud. It shares a lot of
the same functionality and is similar in style to SoundCloud but has it's own blue
theme to it. This was my first independent full stack project and was designed and
built within a 3 week timespan, however I plan on continuing to add
more functionality as well as tweaking some of the styling moving forward.

## Technologies

- Ruby on Rails (backend)
- React-Redux (frontend)
- Postgresql (database management)
- AWS (data hosting)
- Heroku (domain hosting)

## Features

- Secure frontend to backend authentication system using BCrypt.
- Users can upload (or delete) their own audio tracks and provide an accompanying image.
- Users have a library of their own tracks, "Your Tracks".
- Users can view all the tracks that have been uploaded to the site on the "Discover" page.
- Users can leave comments on tracks.
- When a track is played, it populates a music player component which allows for continuous play while navigating around the site.

### Discover Page

This is the first page that User's see when they login/signup which displays the tracks from all the users on the site.
It currently displays the tracks in the order that they were uploaded but I plan on revisiting this and
adding filters to allow for different organizations of the tracks.

![Discover](app/assets/gifs/discover_page.gif)

### Upload Track

Validations are set on the database to ensure that both a track and an image file are both
uploaded and if upload is unsuccessful then errors are rendered. Once a track is uploaded it
populates the "Your Tracks" page.

![Upload](app/assets/gifs/upload_track.gif)

### Continuous Play

Continuous play was made easy due to the front end routing provided by React's Hash Router so the
track itself is never actually interrupted upon switching pages. It did however require some strategy to
allow for intended play and pause of the current track in the music player while on different pages.

![Continuous_Play](app/assets/gifs/continuous_play.gif)

### Search

Users are able to search for songs using part of the song's title or the full song title. Along with
the results, the number of results are displayed.

### Likes

Users are able to like tracks. Each song displays the amount of likes that it has received. A user's
liked tracks are stored in their "Library".

### Comments

Users are able to comment on any given track. The Comment display page shows all relevant comments and
authors of the comment for any given track.

## Design

The design was based off of the SoundCloud website and although I took some noticable liberties
on some of the styling, I frequently referred back to Soundcloud's website to drum up inspiration.
A prime example of this is the custom logo I added which is a wave with the sort of soundwave
decoration that is recognized on the actual SouncCloud logo.

![SoundWave_Logo](app/assets/images/soundwave_logo_img.png 'SoundWave Logo')

## Future Features

I plan on adding additional features to the site to increase overall functionality.
These additions are:

- A profile page
- Filters to display the tracks on the "Discover" page differently
- Wave forms for the tracks

## To run project locally

1. Start postgres locally
2. Create database - `bin/rails db:create`
3. Migrate database - `bin/rails db:migrate`
4. Seed database - `bin/rails db:seed`
5. Run rails server - `rails s`
6. Run frontend server - `npm run start`
7. Navigate to localhost:3000

## Acknowledgments

- SoundCloud for serving as the inspiration to this project
- The Instructors at App Academy that were able to offer guidance
