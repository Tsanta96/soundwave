class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :img_url
      t.integer :artist_id, null: false
      t.integer :album_id

      t.timestamps
    end
    add_index :tracks, :artist_id 
    add_index :tracks, :album_id
  end
end
