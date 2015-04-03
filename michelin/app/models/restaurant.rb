class Restaurant < ActiveRecord::Base
  validates :name, :stars, :comfort, presence: true
  validates :stars, inclusion: 1..3
  validates :comfort, inclusion: 1..5

  belongs_to :district
  belongs_to :area

  # validates chef name if it's a three star restaurant

end
