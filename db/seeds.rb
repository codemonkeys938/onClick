# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = [
  {
    email: 'test1@xxx.xxx',
    username: 'ShaqullieOatmeal',
    password: '123456',
    password_confirmation: '123456'
  },
  {
    email: 'test2@xxx.xxx',
    username: 'KissMyAxe',
    password: '123456',
    password_confirmation: '123456'
  },
  {
    email: 'test3@xxx.xxx',
    username: 'UsernameHere',
    password: '123456',
    password_confirmation: '123456'
  },
  {
    email: 'test4@xxx.xxx',
    username: 'CrazyCatLady',
    password: '123456',
    password_confirmation: '123456'
  },
  {
    email: 'test5@xxx.xxx',
    username: 'CHRISpBACON',
    password: '123456',
    password_confirmation: '123456'
  },
  {
    email: 'test6@xxx.xxx',
    username: 'CoolStoryBro',
    password: '123456',
    password_confirmation: '123456'
  },
  {
    email: 'test7@xxx.xxx',
    username: 'MorganFreemansVoice',
    password: '123456',
    password_confirmation: '123456'
  }
]

groups = [
  {
    name: 'Cheese',
    description: "I know it's cheesy, but I think you're grate."
  },
  {
    name: 'JavaScript',
    description: "We like to complain how JavaScript doesn't have an integer type here."
  },
  {
    name: 'Music',
    description: 'We want to know what your favorite song is right now!'
  },
  {
    name: 'Restaurants in San Diego',
    description: 'Some of the best places to go out to eat in San Diego'
  }
]

users.each do |attr|
  user = User.create(attr)
  puts('Created user:')
  p user
end

groups.each_with_index do |attr, i|
  user = User.find(i + 1)
  group = user.groups.create(attr)
  puts('Created group:')
  p group
end
