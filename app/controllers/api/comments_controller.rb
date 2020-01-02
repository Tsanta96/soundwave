class Api::CommentsController < ApplicationController 

    def index 
        @comments = Comment.all
    end 

    def create 
        debugger
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