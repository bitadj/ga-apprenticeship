class DistrictSerializer < ApplicationSerializer
  attributes :id, :name
  has_many :restaurants
end
