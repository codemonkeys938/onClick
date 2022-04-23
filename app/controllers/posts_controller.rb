class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts
  end

  def create
    if !current_user
      render json: { error: 'Must be logged in to create a post' }, status: :unauthorized
    else
      post = current_user.posts.create(post_params)
      if post.valid?
        render json: post
      else
        render json: post.errors, status: :unprocessable_entity
      end
    end
  end

  def update
    if !current_user
      render json: { error: 'Must be logged in to update a post' }, status: :unauthorized
    else
      post = Post.find(params[:id])
      if post.user_id != current_user.id
        render json: { error: "Can't update another user's post" }, status: :forbidden
      else
        if post.update(post_params)
          render json: post
        else
          render json: post.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    if !current_user
      render json: { error: 'Must be logged in to delete a post' }, status: :unauthorized
    else
      post = Post.find(params[:id])
      if post.user_id != current_user.id
        render json: { error: "Can't delete another user's post" }, status: :forbidden
      else
        if post.destroy
          render json: post
        else
          render json: post.errors, status: :unprocessable_entity
        end
      end
    end
  end

  private
  def post_params
    params.require(:post).permit(:post_text, :group_id)
  end
end
