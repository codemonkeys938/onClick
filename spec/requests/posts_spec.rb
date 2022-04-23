require 'rails_helper'

RSpec.describe "Posts", type: :request do
  before(:each) do
    @post = create(:post)
    @post_params = {
      post_text: 'Hello, this is my post!',
      group_id: @post.group_id
    }
  end

  describe "GET /index" do
    it 'should return a list of posts in the DB' do
      get '/posts'

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res.length).to eq 1
    end
  end

  describe 'POST /create' do
    it 'should throw 401 if a user is not logged in while trying to create a post' do
      params = {post: @post_params}
  
      post '/posts', params: params

      expect(response).to have_http_status :unauthorized

      res = JSON.parse(response.body)

      expect(res['error']).to eq 'Must be logged in to create a post'
    end

    it 'should allow a user that is logged in to create a post on a group' do
      sign_in @post.user

      params = {post: @post_params}

      post '/posts', params: params

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res['post_text']).to eq params[:post][:post_text]
    end

    it 'should not allow a user that is logged in to create a post that is invalid' do
      sign_in @post.user

      params = {
        post: {
          post_text: 'x' * 1500,
          group_id: @post.group_id
        }
      }

      post '/posts', params: params

      expect(response).to have_http_status :unprocessable_entity

      res = JSON.parse(response.body)

      expect(res['post_text']).to include 'is too long (maximum is 1000 characters)'
    end
  end

  describe 'PATCH /update' do
    before(:each) do
      @update_post_params = {
        post_text: "Here's an updated post!!!",
        group_id: @post.group_id
      }
    end

    it 'should throw a unauthorized error if a user tries to update a post while not logged in to an account' do
      params = {post: @update_post_params}

      patch "/posts/#{@post.id}", params: params

      expect(response).to have_http_status :unauthorized

      res = JSON.parse(response.body)

      expect(res['error']).to eq 'Must be logged in to update a post'
    end

    it "should throw a forbidden error if a user tries to update another user's post" do
      not_poster_user = create(:user)
      sign_in not_poster_user

      params = {post: @update_post_params}

      patch "/posts/#{@post.id}", params: params

      expect(response).to have_http_status :forbidden

      res = JSON.parse(response.body)

      expect(res['error']).to eq "Can't update another user's post"
    end

    it 'should allow a user that is logged in to update their own post if valid' do
      sign_in @post.user

      params = {post: @update_post_params}

      patch "/posts/#{@post.id}", params: params

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res['post_text']).to eq params[:post][:post_text]
    end

    it 'should throw a 422 error if a user that is logged in makes an invalid update to their own post' do
      sign_in @post.user

      params = {
        post: {
          post_text: '',
          group_id: @post.group_id
        }
      }

      patch "/posts/#{@post.id}", params: params

      expect(response).to have_http_status :unprocessable_entity

      res = JSON.parse(response.body)

      expect(res['post_text']).to include "can't be blank"
    end
  end

  describe 'DELETE /destroy' do
    it 'should throw a unauthorized error if a user is not logged in while trying to delete a post' do
      delete "/posts/#{@post.id}"

      expect(response).to have_http_status :unauthorized

      res = JSON.parse(response.body)

      expect(res['error']).to eq 'Must be logged in to delete a post'
    end 

    it "should throw a forbidden error if a user tries to delete another user's post" do
      not_poster_user = create(:user)
      sign_in not_poster_user

      delete "/posts/#{@post.id}"

      expect(response).to have_http_status :forbidden

      res = JSON.parse(response.body)

      expect(res['error']).to eq "Can't delete another user's post"
    end

    it 'should allow a user who is logged in to delete their own post' do
      sign_in @post.user

      delete "/posts/#{@post.id}"

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res['id']).to eq @post.id
      expect(res['post_text']).to eq @post.post_text
    end
  end 
end
