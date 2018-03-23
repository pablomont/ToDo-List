class ItemsController < ApplicationController
  respond_to :json
  def index
    respond_to do |format|
      format.json { render json: Item.all }
      format.html
    end
  end

  def create
    respond_with Item.create(item_params)
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end

  def edit
  end

  private
  def item_params
    params.require(:item).permit(:title, :notes, :done)
  end

end
