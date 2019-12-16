class ChangeTracksUserIdBack < ActiveRecord::Migration[5.2]
  def change
    rename_column :tracks, :user_id, :artist_id
    rename_column :albums, :user_id, :artist_id
  end
end
