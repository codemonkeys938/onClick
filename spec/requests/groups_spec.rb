require 'rails_helper'

RSpec.describe "Groups", type: :request do
  before(:each) do
    @user = create(:user)
    @group_params = {
      name: 'Dope Group',
      description: 'This is my super dope group'
    }
  end

  describe "GET /index" do
    it 'should get a list of all groups in the DB' do
      group = @user.groups.create(@group_params)

      get '/groups'

      expect(response).to have_http_status 200
      
      res = JSON.parse(response.body)

      expect(res.length).to eq 1
      expect(res.first['id']).to eq group.id
      expect(res.first['name']).to eq group.name
      expect(res.first['description']).to eq group.description
      expect(res.first['user_id']).to eq @user[:id]
    end
  end

  describe "POST /create" do
    it 'a user who is not logged in should get an unauthorized status when trying to create a group' do
      params = { group: @group_params }

      post '/groups', params: params

      expect(response).to have_http_status :unauthorized

      res = JSON.parse(response.body)

      expect(res['error']).to eq 'Must be logged in to create a group'
    end

    it 'a user who is logged in should be able to create a group if valid' do
      sign_in @user

      params = { group: @group_params }

      post '/groups', params: params

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res['name']).to eq @group_params[:name]
      expect(res['description']).to eq @group_params[:description]
    end

    it 'a user who is logged in gets a unprocessable_entity error if creating an invalid group' do
      sign_in @user

      params = {
        group: {
          name: '',
          description: 'Hey I think your missing a name!'
        }
      }

      post '/groups', params: params

      expect(response).to have_http_status :unprocessable_entity

      res = JSON.parse(response.body)

      expect(res['name']).to include "can't be blank"
    end

    it 'a user who is logged in and trying to make a group with a name that already exists should get a 422 status' do
      sign_in @user
      
      group = create(:group, user: @user)

      params = { 
          group: {
            name: group[:name],
            description: group[:description]
        } 
      }

      post '/groups', params: params

      expect(response).to have_http_status :unprocessable_entity

      res = JSON.parse(response.body)

      expect(res['name']).to include 'has already been taken'
    end
  end

  describe 'PATCH /update' do
    before(:each) do
      @group = create(:group, user: @user)
      @group_update_params = {
        name: 'Something else',
        description: @group[:description]
      }
    end

    it 'user should get unauthorized if not logged in while trying to update a group' do

      params = {group: @group_update_params}

      patch "/groups/#{@group.id}", params: params

      expect(response).to have_http_status :unauthorized

      res = JSON.parse(response.body)

      expect(res['error']).to eq 'Must be logged in to update a group'
    end

    it 'user should be able to update their group if logged in and is valid' do
      sign_in @user

      params = {group: @group_update_params}

      patch "/groups/#{@group.id}", params: params

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res['name']).to eq @group_update_params[:name]
      expect(res['description']).to eq @group_update_params[:description]
    end

    it 'user should get a unprocessable_entity error if logged in with invalid update' do
      sign_in @user

      params = {
        group: {
          name: '',
          description: @group_update_params[:description]
        }
      }

      patch "/groups/#{@group.id}", params: params

      expect(response).to have_http_status :unprocessable_entity

      res = JSON.parse(response.body)

      expect(res['name']).to include "can't be blank"
    end
  end

  describe 'DELETE /destroy' do
    before(:each) do
      @group = create(:group, user: @user)
    end

    it 'user should get an unauthorized error if trying to delete a group while not logged in' do
      delete "/groups/#{@group.id}"

      expect(response).to have_http_status :unauthorized

      res = JSON.parse(response.body)

      expect(res['error']).to eq 'Must be logged in to delete a group'
    end
    
    it 'user should be able to delete their group if logged in' do
      sign_in @user

      delete "/groups/#{@group.id}"

      expect(response).to have_http_status 200

      res = JSON.parse(response.body)

      expect(res['name']).to eq @group[:name]
      expect(res['description']).to eq @group[:description]
    end
  end
end
