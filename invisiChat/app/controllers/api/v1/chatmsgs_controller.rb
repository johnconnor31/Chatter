class Api::V1::ChatmsgsController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token
  def index
    messages = Chatmsg.joins(:user).select('*')
    respond_with messages
  end
  def create
    user_id = User.where(name: message_filtered[:username]).map(&:id).first
    puts user_id
    h={}
    h[:user_id] = user_id
    h[:message] = message_filtered[:message]
    puts h
    respond_with :api,:v1,Chatmsg.create(h)
  end
  def destroy
    respond_with Item.destroy(params[:id])
  end
  def update
    item= Item.find(params[:id])
    item.update_attributes(item_filtered)
    respond_with item,json: item
  end
  private
  def message_filtered
    params.require(:messageui).permit(:username,:message)
  end
end
