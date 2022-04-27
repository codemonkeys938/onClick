# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = [
  {
    email: 'generaluser@xxx.xxx',
    username: 'chatbot',
    password: '123456',
    password_confirmation: '123456'
  },
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
    name: 'General',
    description: 'General description'
  },
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

posts = [
  {
    post_text: 'Why did the two golfer bring two pairs of pants?..... In cse he got a hole in one!',
    group_id: 1
  },
  {
    post_text: 'I wrote a song about a tortilla.... Actually, it\'s more of a wrap.',
    group_id: 1
  },
  {
    post_text: 'I saved a bunch of money by switching over to geico',
    group_id: 1
  }, 
  {
    post_text: 'What is red and really bad for your teeth?.... A flying brick!',
    group_id: 1
  },
  {
    post_text: 'Better grab a dubmrella... It\'s really stupid out there today.',
    group_id: 1
  },
  {
    post_text: 'What do you call a pig that does karate?..... A pork chop!',
    group_id: 1
  },
  {
    post_text: 'The past, present, and future walked into a bar.... it was tense',
    group_id: 1
  },
  {
    post_text: 'My boss told me to have a good day..... So I went home.',
    group_id: 1
  },
  {
    post_text: 'Love is like a fart, if you have to forget it, it\'s probably shit',
    group_id: 1
  },
  {
    post_text: 'Legend has it that the 1st cheese was created 4,000 years ago, accidentally!',
    group_id: 2
  },
  {
    post_text: 'It takes about 10 pounds of milk to make just 1 pound of cheese!',
    group_id: 2
  },
  {
    post_text: 'Just found out some cheeses are illegal in the United States.',
    group_id: 2
  },
  {
    post_text: 'Many lactose intolerant people can eat cheese!',
    group_id: 2
  },
  {
    post_text: 'Who knew null was an object?',
    group_id: 3
  },
  {
    post_text: 'NaN is actually a number (typeof NaN > "number") and (NaN === NaN > false). How about that?',
    group_id: 3
  },
  {
    post_text: 'Reminder to everyone, 0 evaluates to false!',
    group_id: 3
  },
  {
    post_text: 'DVP by PUP is my favorite fighting song right now!',
    group_id: 4
  },
  {
    post_text: "El Cotixan for some bomb Mexican food if your're in the El Cajon area",
    group_id: 5
  },
  {
    post_text: 'Has anyone tried Menya Ultra in Kearny Mesa? Is it any good?',
    group_id: 5
  },
  {
    post_text: 'Sushi Yorimichi has great sushi if you can get past the strip club exterior.',
    group_id: 5
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

posts.each do |attr|
  user = User.find(rand(1..users.length))
  post = user.posts.create(attr)
  puts ('Created post:')
  p post
end
