require "rails_helper"

RSpec.describe User, type: :model do
  describe "associations" do
    it { should have_many(:groups) }
    it { should have_many(:posts) }
  end

  describe "validations" do
    subject { create(:user) }
    it {
      should validate_presence_of(:username)
               .with_message("can't be blank")
    }

    it {
      should validate_presence_of(:email)
               .with_message("can't be blank")
    }

    it {
      should validate_presence_of(:password)
               .with_message("can't be blank")
    }

    it {
      should validate_uniqueness_of(:username)
               .with_message("has already been taken")
    }

    it {
      should allow_value("test@email.com")
               .for(:email)
    }

    it {
      should allow_value("SomethingSecure")
               .for(:password)
    }

    it {
      should_not allow_value("test.com").for(:email)
                   .with_message("is invalid")
    }

    it {
      should_not allow_value("Scio")
                   .for(:password)
                   .with_message("is too short (minimum is 6 characters)")
    }

    it {
      should_not allow_value("123456")
                   .for(:password)
                   .with_message("password must have at least one capital letter")
    }
  end
end
