class Track < ApplicationRecord
    validates :title, presence: true 
    validates :user_id, presence: true
    
    # A track has many listeners
    # A track has one artist
    has_many :listeners, 
    foreign_key: :user_id,
    className: :User

    belongs_to :artist, 
    foreign_key: :user_id, 
    className: :User

    #  * A track can be on a playlist
    belongs_to :playlist, optional: :true

    #A track can have many likes
    has_many :likes,
    foreign_key: :track_id,
    className: :


end
