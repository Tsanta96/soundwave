class RemoveTrackUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :track_url
  end
end
