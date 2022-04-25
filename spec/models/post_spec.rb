require 'rails_helper'

RSpec.describe Post, type: :model do
  it {should validate_presence_of(:post_text)}
  it {should validate_length_of(:post_text).is_at_most(1000)}

  it 'should add a valid post to the DB' do

    post = create(:post)

    expect(post).to be_valid

    posts = Post.all

    expect(posts.length).to eq 1
    expect(posts.first.post_text).to eq post.post_text
  end

  it 'should allow a user that did not create the group to submit a post' do
    post = create(:post)

    group_owner_id = post.group.user_id
    group_poster_id = post.user.id

    expect(group_owner_id).to_not eq group_poster_id
  end

  it 'should allow a group owner to post on their own group' do
    group_owner = create(:user)
    group = create(:group, user: group_owner)
    post = create(:post, group: group, user: group_owner)

    expect(group_owner.id).to eq post.user_id
  end
end
