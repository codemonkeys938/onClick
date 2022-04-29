require "rails_helper"

RSpec.describe Group, type: :model do
  describe "associations" do
    it { should belong_to(:user) }
    it { should have_many(:posts) }
  end

  describe "validations" do
    subject { create(:group) }

    it {
      should validate_presence_of(:name)
               .with_message("can't be blank")
    }

    it {
      should validate_presence_of(:description)
               .with_message("can't be blank")
    }

    it {
      should validate_length_of(:description)
               .is_at_least(10)
               .with_message("is too short (minimum is 10 characters)")
    }

    it {
      should validate_length_of(:description)
               .is_at_most(500)
               .with_message("is too long (maximum is 500 characters)")
    }

    it {
      should validate_uniqueness_of(:name)
               .with_message("has already been taken")
    }

    it {
      should allow_value("A Group Name")
               .for(:name)
    }

    it {
      should allow_value("A Group Description")
               .for(:description)
    }

    it {
      should_not allow_value("invalid")
                   .for(:description)
                   .with_message("is too short (minimum is 10 characters)")
    }
  end
end
