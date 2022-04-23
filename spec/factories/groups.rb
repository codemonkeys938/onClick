FactoryBot.define do
  factory :group do
    name {"Test Group #{rand(1..10000)}"}
    description {'Test Group Description'}
    user
  end
end
