class Api::CommentsController < ApplicationController 

    def track_comments
        @comments = Track.find_by_id(params[:track_id]).comments 
        render :index
    end 

    def create 
        @comment = Comment.new(comment_params)

        if @comment.save
            render :index
        else 
            render json: @comment.errors.full_messages, status: 400
        end
    end 

    def destroy 
        @comment = Comment.find_by_id(params[:id])
        if @comment 
            @comment.delete 
        end
    end

    private 

    def comment_params 
        params.require(:comment).permit(:body, :author_id, :track_id)
    end
end