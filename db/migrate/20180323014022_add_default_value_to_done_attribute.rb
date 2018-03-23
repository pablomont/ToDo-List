class AddDefaultValueToDoneAttribute < ActiveRecord::Migration[5.1]
  def up
    change_column :items, :done, :boolean, default: false
  end

  def down
    change_column :items, :done, :boolean, default: nil
  end
end
