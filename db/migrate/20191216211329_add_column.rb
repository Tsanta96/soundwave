class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :track_id, :integer, null: false
  end
end
