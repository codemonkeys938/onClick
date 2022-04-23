class Group < ApplicationRecord
  belongs_to :user

  has_many :posts

  validates :name, :description, presence: true
  validates :name, uniqueness: true
  validates :description, length: {minimum: 10}
end
