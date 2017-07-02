class User < ApplicationRecord
  has_many :chatmsg, dependent: :destroy
end
