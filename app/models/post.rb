class Post < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :post_text, presence: true
  validates :post_text, length: {maximum: 1000}
end
