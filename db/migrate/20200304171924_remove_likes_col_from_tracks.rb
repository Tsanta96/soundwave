class RemoveLikesColFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :likes
    remove_column :users, :track_likes
  end
end
