class Api::ArtistsController < ApplicationController 

    def artist_tracks
        #Might need to find current user first and use that user instead of 'current_user'
        @tracks = current_user.tracks
        render :index
    end 
end