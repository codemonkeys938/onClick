FactoryBot.define do
  factory :user do
    email { "user#{rand(1..10000)}@xxx.xxx" }
    username { "user#{rand(1..10000)}" }
    password { "SomethingSecure" }
    password_confirmation { "SomethingSecure" }
  end
end
