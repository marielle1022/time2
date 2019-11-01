defmodule Time1Web.LayoutView do
  use Time1Web, :view

  # Taken from Lens git
  # Used in layout/app.html.eex
  def nav_link(conn, text, path) do
    curr_path = "/" <> Enum.join(conn.path_info, "/")

    active =
      if curr_path == path do
        "active"
      else
        ""
      end

    raw(~s(
      <li class="nav-item #{active}">
        <a class="nav_link" href="{path}">#{text}</a>
      </li>
    ))
  end
end
