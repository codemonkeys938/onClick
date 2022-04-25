FactoryBot.define do
  factory :post do
    post_text {'A test post'}
    user
    group
  end
end
