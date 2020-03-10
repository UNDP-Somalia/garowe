class AddLastEducationDegreeToUsers < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :last_education_degree, :string
  end
end
