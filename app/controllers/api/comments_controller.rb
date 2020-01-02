class Api::CommentsController < ApplicationController 

    def index 
        @comments = Comment.all
    end 

    def create 

    end 

    def destroy 

    end

    private 

    def comment_params 
        params.require(:comment).permit(:body, :author_id, :track_id)
    end
end