class Registrations::RegistrationsController < Devise::RegistrationsController
  def create
    user = User.create(user_params)
    if user.valid?
      sign_in user
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :username, 
      :email, 
      :password, 
      :password_confirmation
    )
  end
end
