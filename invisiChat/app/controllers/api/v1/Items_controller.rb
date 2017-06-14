class Api::V1::ItemsController < Api::V1::BaseController
	def index
		respond_with Item.all
	end
	def create
		respond_with :api,:v1,Item.create(item_filtered)
	end
	def destroy
		respond_with Item.destroy(params[:id])
	end
	def update
		item= Item.find(item_filtered[:id])
		item.update_attributes(item)
		respond_with item,json: item
	end
	private
	def item_filtered
		params.require(:item).permit(:id,:name,:description)
	end
end