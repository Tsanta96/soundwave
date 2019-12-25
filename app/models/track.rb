class Track < ApplicationRecord
    validates :title, presence: true 
    validates :artist_id, presence: true
    
    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_one_attached :track_file
    has_one_attached :img_file
end
