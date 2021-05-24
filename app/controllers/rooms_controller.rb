class RoomsController < ApplicationController
  def show
    # 仮ログイン機能
    cookies.signed[:user_id] = User.first.id
    @messages = Message.all
  end
end
