class AddColTrackUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :track_url, :string, null: false
  end
end
