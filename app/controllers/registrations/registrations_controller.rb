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

  def update
    if !current_user
      render json: { error: "You must be logged in to update an account" }, status: :forbidden
    else
      if current_user.update(filter_params)
        if !user_signed_in?
          sign_in current_user
        end
        render json: current_user
      else
        render json: current_user.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy
    if !current_user
      render json: { error: "Must be logged in to delete an account" }, status: :unauthorized
    else
      if current_user.destroy
        render json: current_user
      else
        render json: current_user.errors, status: :unprocessable_entity
      end
    end
  end

  private

  def filter_params
    user_params.to_h.filter do |key, value|
      !value.empty?
    end
  end

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :password_confirmation
    )
  end
end
