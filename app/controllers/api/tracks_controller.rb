class Api::TracksController < ApplicationController 
    
    def index 
        @tracks = Track.all
        render :index
    end

    def artist_tracks
        @tracks = User.find_by_id(params[:artist_id]).tracks
        render :index
    end 

    def search_string
        #Retreive tracks that include the search string. If none, return status error and no results found 
        search_string_lower = params[:search_string].downcase
        search_string_cap = params[:search_string].capitalize
    
        @tracks = Track.where("title LIKE ?", "%#{search_string_lower}%").or(Track.where("title Like ?", "%#{search_string_cap}%"))

        if @tracks.length > 0
            render :index
        else 
            render json: ["Could not find tracks"], status: 400
        end
    end

    def show 
        @track = Track.find_by_id(params[:id])
        
        if @track 
            render :show
        else 
            render json: ["Track does not exist"], status: 400
        end
    end

    def create 
        if params[:track][:img_file] == "" || params[:track][:track_file] == ""
            render json: ["No field left behind"], status: 400
        else @track = Track.new(track_params)
            @track.save 
            render :index 
        end
    end

    # "create" test
    # newtrack = ({track: {title: "song3", artist_id: 1}})
    # window.createTrack(newtrack)

    def update 
        @track = Track.find_by_id(params[:id])
        if @track.update
            render :show
        else  
            render json: @track.errors.full_messages, status: 400
        end
    end

    def destroy 
        @track = Track.find_by_id(params[:id])
        
        if @track 
            track_name = Track.find_by_id(params[:id]).title
            Track.find_by_id(params[:id]).delete
            render json: ["#{track_name} has been deleted"]
        else  
            render json: ["Track could not be deleted"]
        end
    end

    private 

    def track_params 
        params.require(:track).permit(:title, :artist_id, :track_file, :img_file)
    end

end