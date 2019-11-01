defmodule Time1.Repo.Migrations.CreateTimesheets do
  use Ecto.Migration

  def change do
    create table(:timesheets) do
      add :sheetname, :string, null: false
      add :task1, :string
      add :task2, :string
      add :task3, :string
      add :task4, :string
      add :task5, :string
      add :task6, :string
      add :task7, :string
      add :task8, :string
      add :numhours, :integer, null: false
      add :user_id, references(:users, on_delete: :nothing), null: false
      # add :uuid, :string, null: false

      timestamps()
    end

    create index(:timesheets, [:user_id])
  end
end
