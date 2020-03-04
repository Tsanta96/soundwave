class Api::LikesController < ApplicationController

    def toggle_like
        @search_like = Like.where(user_id: params[:userId], track_id: params[:trackId])
        if  @search_like.length == 0
            @like = Like.new(user_id: params[:userId], track_id: params[:trackId])
            @like.save
        else 
            @search_like.destroy_all
        end
    end

    def liked_tracks
        @liked_tracks = []
        @user = User.find(params[:user_id])
        @user_likes = @user.likes

        @user_likes.each do |like|
            track = Track.find(like.track_id)
            @liked_tracks << track
        end

        render :index
    end 

    private 

    def like_params 
        params.require(:like).permit(:user_id, :track_id)
    end

end

