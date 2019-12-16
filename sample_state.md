```
{
    entities: {
        users: {
            1: {
                id: 1,
                username: "Theo Katzman",
                email: "tkatz4@gmail.com",
                imgUrl: "http://example.net/birthday.php?branch=brake&boat=argument",
                followersUserIds: [2, 12, 15]
                followingUserIds: [3]
                likedTracks: []
            },
            2: {
                id: 2,
                username: "pineapple_person12",
                email: "pineapple12@gmail.com",
                imgUrl: "http://bell.example.org/bedroom.html",
                followersUserIds: [3, 6]
                followingUserIds: [1, 3, 12, 33, 54]
                likedTracks: [10, 30]
            },
            3: {
                id: 3,
                username: "Outkast",
                email: "andre3k@gmail.com",
                imgUrl: "http://www.example.com/?actor=brother&belief=acoustics",
                followersUserIds: [2, 44, 52]
                followingUserIds: [1]
                likedTracks: [20]
            }
        }, 
        tracks: {
            10: {
                id: 10,
                title: "Sultans of Swing",
                imgUrl: "https://www.example.com/addition.html"
                artistId: 32,
                albumTitle: "Dire Straits",
                commentIds : [16,19]
            },
           20: {
                id: 20,
                title: "Hard Work",
                imgUrl: "http://www.example.com/act/apparatus.php"
                artistId: 1,
                albumTitle: "Heartbreak Hits",
                commentIds : [8,16,32]
            },
            30: {
                id: 30,
                title: "Elevators",
                imgUrl: "https://www.example.edu/air"
                artistId: 3,
                albumTitle: "ATLiens",
                commentIds : [44,49,67]
            }
        },
        albums: {
            3: {
                id: 3,
                title: "ATLiens",
                artistId: 3
            },
            6: {
                id: 6,
                title: "Rubber Soul",
                artistId: 45
            },
            9: {
                id: 9,
                title: "Are You Experienced",
                artistId: 5
            }
        },
        playlists: {
            15: {
                name: "Funky Stuff",
                userId: 2
            }
            30: {
                name: "Groovy Jams",
                userId: 16
            }
            45: {
                name: "Beach Playlist",
                userId: 50
            }
        },
        trackLikes: {
            33: {
                likerId: 2,
                trackId: 10
            },
            66: {
                likerId: 2,
                trackId: 30
            },
            99: {
                likerId: 3,
                trackId: 20
            }
        },
        comments: {
            4: {
                body: "The keys are what makes this song",
                authorId: 52,
                trackId: 17
            },
            8: {
                body: "Such a master at guitar and singing, save some talent for the rest of us",
                authorId: 2,
                trackId: 20,
            },
            12: {
                body: "Perfect for the xmas season",
                authorId: 7,
                trackId: 14
            }
        }
    },
    ui: {
        loading: true/false,
        currentUser: true/false,
        currentTrack: id  
    },
    errors: {
        sessionErrors: ["Incorrect username/password combination", "username cannot be blank"]
        trackErrors: ["title cannot be blank"],
        commentErrors: ["body cannot be blank"]
    },
    session: { currentUserId: 3 }
}
```
