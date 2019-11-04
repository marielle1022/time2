defmodule Time1.Repo.Migrations.CreateTimesheets do
  use Ecto.Migration

  def change do
    create table(:timesheets) do
      add :sheetname, :string, null: false
      add :task1, :string, null: false
      add :task2, :string
      add :task3, :string
      add :task4, :string
      add :task5, :string
      add :task6, :string
      add :task7, :string
      add :task8, :string
      add :numhours, :integer, null: false

      timestamps()
    end

  end
end
