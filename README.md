# Timesheet

Design Decisions:
  * Created a single database for users which includes both managers and workers
  ** When registering for an account, users specify their role (manager/worker)
  ** This information is stored under "role" in the user table
  ** This allows for a simpler registration


## Phoenix Information

To start your Phoenix server:

  * Install dependencies with mix deps.get
  * Create and migrate your database with mix ecto.setup
  * Install Node.js dependencies with cd assets && npm install
  * Start Phoenix endpoint with mix phx.server
  
Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
