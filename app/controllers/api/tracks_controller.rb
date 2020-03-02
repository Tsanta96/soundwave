class Api::TracksController < ApplicationController 
    
    def index 
        @tracks = Track.all
        render :index
    end

    def artist_tracks
        #Might need to find current user first and use that user instead of 'current_user'
        @tracks = User.find_by_id(params[:artist_id]).tracks
        render :index
    end 

    def search_string
        @tracks = Track.where(`title = #{params[:search_string]}`)
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