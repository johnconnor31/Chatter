class CreateChatmsgs < ActiveRecord::Migration[5.0]
  def change
    create_table :chatmsgs do |t|
      t.text :message
      t.belongs_to :user ,index: true
      t.timestamps
    end
  end
end
