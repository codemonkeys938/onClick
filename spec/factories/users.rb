FactoryBot.define do
  factory :user do
    email {'test@test.com'}
    username {'user123'}
    password {'123456'}
    password_confirmation {'123456'}
  end
end
