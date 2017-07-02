class Api::V1::UsersController < BaseController
  def create
      respond_with :Api,:V1,:User.create(user_params)
  end
  def destroy
    respond_with :Api,:V1,User.destroy(params[:name])
  end
  private def user_params
    params.filter(:user).require(:name,:icon)
  end
end
