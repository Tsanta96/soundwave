class Album < ApplicationRecord
    validates :title, presence: true 
    validates :user_id, presence: true

    #Can only be created by one artist
    belongs_to :artist,
    foreign_key: :artist_id,
    className: :User
end
