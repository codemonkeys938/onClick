require 'rails_helper'

RSpec.describe Group, type: :model do
  it { should belong_to(:user)}
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_length_of(:description).is_at_least(10) }
  it { should validate_uniqueness_of(:name) }

  it 'should add a valid group to the DB' do
    user = create(:user)
    group = create(:group, user: user)

    expect(user).to be_valid
    expect(group).to be_valid
    expect(user[:id]).to eq user.id
    expect(group[:user_id]).to eq user.id
  end
end
