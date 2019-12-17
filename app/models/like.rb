class Like < ApplicationRecord
    validates :user_id, presence: true 
    validates :track_id, presence: true

    #belongs to a user
    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User
end
