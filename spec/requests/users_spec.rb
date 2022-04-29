require "rails_helper"

RSpec.describe "Users", type: :request do
  before(:each) do
    10.times do
      create(:user)
    end
  end
  describe "GET /index" do
    it "should get a list of all users in the DB" do
      get "/users"

      expect(response).to have_http_status :success

      res = JSON.parse(response.body)
      rand_user = res[rand(0..res.length - 1)]

      expect(rand_user.keys).to include "username"
      expect(rand_user.keys).to include "created_at"
      expect(rand_user.keys).to include "updated_at"
      expect(rand_user.keys).to include "id"
      expect(rand_user["username"]).to_not be_blank
      expect(rand_user["created_at"]).to_not be_blank
      expect(rand_user["updated_at"]).to_not be_blank
      expect(rand_user["id"]).to_not be_blank

      expect(rand_user.keys).to_not include "email"
    end
  end
end
