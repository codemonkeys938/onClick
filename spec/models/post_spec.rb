require "rails_helper"

RSpec.describe Post, type: :model do
  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:group) }
  end

  describe "validations" do
    it {
      should validate_presence_of(:post_text)
               .with_message("can't be blank")
    }

    it {
      should validate_length_of(:post_text)
               .is_at_most(1000)
               .with_message("is too long (maximum is 1000 characters)")
    }

    it {
      should allow_value("Here's a post on a group!")
               .for(:post_text)
    }

    it {
      should_not allow_value("x" * 1500)
                   .for(:post_text)
                   .with_message("is too long (maximum is 1000 characters)")
    }
  end
end
