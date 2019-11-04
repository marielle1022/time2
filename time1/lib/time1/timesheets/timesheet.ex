defmodule Time1.Timesheets.Timesheet do
  use Ecto.Schema
  import Ecto.Changeset

  schema "timesheets" do
    field :numhours, :integer
    field :sheetname, :string
    field :task1, :string
    field :task2, :string
    field :task3, :string
    field :task4, :string
    field :task5, :string
    field :task6, :string
    field :task7, :string
    field :task8, :string

    belongs_to :user, Time1.Users.User

    timestamps()
  end

  @doc false
  def changeset(timesheet, attrs) do
    timesheet
    |> cast(attrs, [
      :sheetname,
      :task1,
      :task2,
      :task3,
      :task4,
      :task5,
      :task6,
      :task7,
      :task8,
      :numhours,
      :user_id
    ])
    |> validate_required([
      :sheetname,
      :task1,
      :numhours,
      :user_id
    ])
  end
end
