class AddLikesToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :likes, :integer, array: true, default: []
  end
end
