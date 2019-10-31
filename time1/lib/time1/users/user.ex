defmodule Time1.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :manager, :string
    field :name, :string
    field :role, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :role, :manager])
    |> validate_required([:name, :role, :manager])
  end
end
