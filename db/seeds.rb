# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "firstUser", email: "firstUser@", password: "password")
User.create(username: "secondUser", email: "secondUser@", password: "password")
User.create(username: "thirdUser", email: "thirdUser@", password: "password")

Track.create(title: "song1", artist_id: 3, track_url: "song1.com")
Track.create(title: "song2", artist_id: 2, track_url: "song2.com")
Track.create(title: "song3", artist_id: 1, track_url: "song3.com")


