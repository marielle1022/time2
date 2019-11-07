defmodule Time1.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  # QUESTION: Is it better to have separate manager database?
  # manager = has_many workers (?)

  schema "users" do
    field :manager, :string
    field :name, :string
    field :password_hash, :string
    field :role, :string
    field :username, :string

    has_many :timesheets, Time1.Timesheets.Timesheet

    field :password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :name, :role, :manager, :password])
    |> hash_password()
    |> validate_required([:username, :name, :role, :password_hash])
  end

  def hash_password(cset) do
    pw = get_change(cset, :password)
    change(cset, Argon2.add_hash(pw))
  end
end
