# Much taken from NatTuck lens app

defmodule Time1Web.SessionController do
  use Time1Web, :controller

  action_fallback Time1Web.FallbackController
  alias Time1.Users

  # Question: use password? Migration has password_hash
  # Question: username vs user_name
  def create(conn, %{"username" => username, "password" => password}) do
    user = Users.authenticate_user(username, password)

    if user do
      token = Phoenix.Token.sign(conn, "session", user.id)
      resp = %{token: token, user_id: user.id, user_name: user.name}

      conn
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(:created, Jason.encode!(resp))
    else
      resp = %{errors: ["Authentication Failed"]}

      conn
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(:unauthorized, Jason.encode!(resp))
    end
  end
end
