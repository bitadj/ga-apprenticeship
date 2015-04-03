class Api::DistrictsController < ApplicationController
  def index
    @districts = District.all
    render json: @districts

    # respond_to do |format|
    #   format.html
    #   format.json { render json: @districts }
    # end
  end

  def show
    @district = District.find(params[:id])
    render json: @district
  end
end