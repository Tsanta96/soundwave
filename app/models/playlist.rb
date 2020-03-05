class Playlist < ApplicationRecord
    validates :title, presence: true
    validates :user_id, presence: true

    #playlist belongs to a user
    belongs_to :user, 
    foreign_key: :user_id,
    class_name: :User
end
