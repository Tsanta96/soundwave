class Track < ApplicationRecord
    validates :title, presence: true, uniqueness: {case_sensitive: false} 
    validates :artist_id, presence: true

    validate :ensure_track_file
    validate :ensure_img_file
    
    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_many :comments,
    foreign_key: :track_id,
    class_name: :Comment

    has_many :likes,
    foreign_key: :track_id,
    class_name: :Like

    #has_one_attached/has_many_attached is how ActiveStorage communicates with the tables
    has_one_attached :track_file # Becomes a virtual attribute on each instance of our model.
    has_one_attached :img_file # Becomes a virtual attribute on each instance of our model.

    def ensure_track_file 
        unless self.track_file.attached?
            errors[:track_file] << "Must be attached"
        end
    end

    def ensure_img_file 
        unless self.img_file.attached?
            errors[:img_file] << "Must be attached"
        end
    end
end
