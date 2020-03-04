class AddTrackLikesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :track_likes, :integer, array: true, default: []
  end
end
