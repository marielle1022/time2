defmodule Time1.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string, null: false
      add :name, :string, null: false
      add :role, :string, null: false
      add :manager, :string

      timestamps()
    end

  end
end
