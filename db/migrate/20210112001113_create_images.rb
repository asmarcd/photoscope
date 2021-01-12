class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :name
      t.string :image_url
      t.string :caption
      t.string :tag

      t.timestamps
    end
  end
end
