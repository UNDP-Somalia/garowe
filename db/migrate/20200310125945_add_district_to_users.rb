class AddDistrictToUsers < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :district, :string
  end
end
