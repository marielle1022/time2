defmodule Time1.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :role, :string
      add :manager, :string

      timestamps()
    end

  end
end
