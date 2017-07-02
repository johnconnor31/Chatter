# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
1.times {User.create!(name:'Eminem',img:'http://hiphopgoldenage.com/wp-content/uploads/2015/08/Eminem-014.jpg')}
10.times {Chatmsg.create!(message:'Look if you have once chance',user_id:1)}