defmodule Time1Web.Router do
  use Time1Web, :router

  # Citation: Taken largely from Nat's Notes on the Lens app

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  # pipeline :api do
  #   plug :accepts, ["json"]
  # end

  pipeline :ajax do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/ajax", Time1Web do
    pipe_through :ajax

    resources "/users", UserController, except: [:new, :edit]
    resources "/timesheets", TimesheetController, except: [:new, :edit]
    # QUESTION: is this used (get ttimesheets..., below)? Commented out on time1 version
    get "/timesheets/:id/show", TimesheetController, :show
    resources "/sessions", SessionController, only: [:create], singleton: true
  end

  scope "/", Time1Web do
    pipe_through :browser

    get "/", PageController, :index
    # resources "/users", UserController
    # resources "/timesheets", TimesheetController
    # get "/timesheets/:id/show", TimesheetController, :show
    # resources "/sessions", SessionController, only: [:new, :create, :delete], singleton: true
    get "/*path", PageController, :index
    # singleton: true means each user only sees one session
  end

  # Other scopes may use custom stacks.
  # scope "/api", Time1Web do
  #   pipe_through :api
  # end
end
