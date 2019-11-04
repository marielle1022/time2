defmodule Time1Web.UserView do
  use Time1Web, :view
  alias Time1Web.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
      manager: user.manager,
      password_hash: user.password_hash}
  end
end
