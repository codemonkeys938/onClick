FactoryBot.define do
  factory :user do
    email {"user#{rand(1..10000)}@xxx.xxx"}
    username {"user#{rand(1..10000)}"}
    password {'123456'}
    password_confirmation {'123456'}
  end
end
