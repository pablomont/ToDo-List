class ItemsController < ApplicationController
  respond_to :json
  def index
    respond_to do |format|
      format.json { render json: Item.all }
      format.html
    end
  end

  def create
    @item = Item.new(item_params)
      if @item.save
        respond_to do |format|
          format.json { render :json => @item }
        end
      end
  end

  def update
    @item= Item.find(params[:id])
    if @item.update(item_params)
      respond_to do |format|
        format.json { render :json => @item }
      end
    end
  end

  def show
    respond_with(Item.find(params[:id]))
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:title, :notes, :done)
  end

end
