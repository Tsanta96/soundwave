class Track < ApplicationRecord
    validates :title, presence: true 
    validates :artist_id, presence: true

    validate :ensure_track_file
    validate :ensure_img_file
    
    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_many :comments,
    foreign_key: :track_id,
    class_name: :Comment

    has_one_attached :track_file
    has_one_attached :img_file

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
