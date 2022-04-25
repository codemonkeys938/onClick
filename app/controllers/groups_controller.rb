class GroupsController < ApplicationController
  def index
    groups = Group.all
    render json: groups.as_json(include: :posts)
  end

  def create
    if !current_user
      render json: {error: 'Must be logged in to create a group'}, status: :unauthorized
    else
      group = current_user.groups.create(group_params)
      if group.valid?
        render json: group
      else
        render json: group.errors, status: :unprocessable_entity
      end
    end
  end

  def update
    if !current_user
      render json: {error: 'Must be logged in to update a group'}, status: :unauthorized
    else
      group = current_user.groups.find(params[:id])
      if group.update(group_params)
        render json: group
      else
        render json: group.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy
    if !current_user
      render json: {error: 'Must be logged in to delete a group'}, status: :unauthorized
    else
      group = current_user.groups.find(params[:id])
      if group.destroy
        render json: group
      else
        render json: group.errors, status: :unprocessable_entity
      end
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, :description)
  end
end
