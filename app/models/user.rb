class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, null: true}

    has_many :tracks,
    foreign_key: :artist_id,
    class_name: :Track,  
    dependent: :destroy

    has_many :comments,
    foreign_key: :author_id,
    class_name: :comment,
    dependent: :destroy

    has_many :likes,
    foreign_key: :user_id,
    class_name: :Like

    attr_reader :password 

    after_initialize :ensure_session_token

     # Class method for finding a user ONLY if we have the correct username and password
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end
