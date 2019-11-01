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
    field :user_id, :id

    # belongs_to :user, Time1.Users.User

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

    # |> generate_uuid()

    # |> save_timesheet()
  end

  # def make_uuid() do
  #   :crypto.strong_rand_bytes(16)
  #   |> Base.encode16()
  # end
  #
  # def generate_uuid(cset) do
  #   if get_field(cset, :uuid) do
  #     cset
  #   else
  #     put_change(cset, :uuid, make_uuid())
  #   end
  # end

  # def save_timesheet(cset) do
  #   up = get_field(cset, :)
  # end
end
