class Comment < ApplicationRecord
    validates :body, presence: true
    validate :author_id, presence: true 
    validates :track_id, presence: true

    #can only have one author
    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
