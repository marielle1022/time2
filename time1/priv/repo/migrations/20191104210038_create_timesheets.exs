defmodule Time1.Repo.Migrations.CreateTimesheets do
  use Ecto.Migration

  # QUESTION: user_id, create_index
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
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:photos, [:user_id])
  end
end
