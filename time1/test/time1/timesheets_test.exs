defmodule Time1.TimesheetsTest do
  use Time1.DataCase

  alias Time1.Timesheets

  describe "timesheets" do
    alias Time1.Timesheets.Timesheet

    @valid_attrs %{numhours: 42, sheetname: "some sheetname", task1: "some task1", task2: "some task2", task3: "some task3", task4: "some task4", task5: "some task5", task6: "some task6", task7: "some task7", task8: "some task8"}
    @update_attrs %{numhours: 43, sheetname: "some updated sheetname", task1: "some updated task1", task2: "some updated task2", task3: "some updated task3", task4: "some updated task4", task5: "some updated task5", task6: "some updated task6", task7: "some updated task7", task8: "some updated task8"}
    @invalid_attrs %{numhours: nil, sheetname: nil, task1: nil, task2: nil, task3: nil, task4: nil, task5: nil, task6: nil, task7: nil, task8: nil}

    def timesheet_fixture(attrs \\ %{}) do
      {:ok, timesheet} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Timesheets.create_timesheet()

      timesheet
    end

    test "list_timesheets/0 returns all timesheets" do
      timesheet = timesheet_fixture()
      assert Timesheets.list_timesheets() == [timesheet]
    end

    test "get_timesheet!/1 returns the timesheet with given id" do
      timesheet = timesheet_fixture()
      assert Timesheets.get_timesheet!(timesheet.id) == timesheet
    end

    test "create_timesheet/1 with valid data creates a timesheet" do
      assert {:ok, %Timesheet{} = timesheet} = Timesheets.create_timesheet(@valid_attrs)
      assert timesheet.numhours == 42
      assert timesheet.sheetname == "some sheetname"
      assert timesheet.task1 == "some task1"
      assert timesheet.task2 == "some task2"
      assert timesheet.task3 == "some task3"
      assert timesheet.task4 == "some task4"
      assert timesheet.task5 == "some task5"
      assert timesheet.task6 == "some task6"
      assert timesheet.task7 == "some task7"
      assert timesheet.task8 == "some task8"
    end

    test "create_timesheet/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Timesheets.create_timesheet(@invalid_attrs)
    end

    test "update_timesheet/2 with valid data updates the timesheet" do
      timesheet = timesheet_fixture()
      assert {:ok, %Timesheet{} = timesheet} = Timesheets.update_timesheet(timesheet, @update_attrs)
      assert timesheet.numhours == 43
      assert timesheet.sheetname == "some updated sheetname"
      assert timesheet.task1 == "some updated task1"
      assert timesheet.task2 == "some updated task2"
      assert timesheet.task3 == "some updated task3"
      assert timesheet.task4 == "some updated task4"
      assert timesheet.task5 == "some updated task5"
      assert timesheet.task6 == "some updated task6"
      assert timesheet.task7 == "some updated task7"
      assert timesheet.task8 == "some updated task8"
    end

    test "update_timesheet/2 with invalid data returns error changeset" do
      timesheet = timesheet_fixture()
      assert {:error, %Ecto.Changeset{}} = Timesheets.update_timesheet(timesheet, @invalid_attrs)
      assert timesheet == Timesheets.get_timesheet!(timesheet.id)
    end

    test "delete_timesheet/1 deletes the timesheet" do
      timesheet = timesheet_fixture()
      assert {:ok, %Timesheet{}} = Timesheets.delete_timesheet(timesheet)
      assert_raise Ecto.NoResultsError, fn -> Timesheets.get_timesheet!(timesheet.id) end
    end

    test "change_timesheet/1 returns a timesheet changeset" do
      timesheet = timesheet_fixture()
      assert %Ecto.Changeset{} = Timesheets.change_timesheet(timesheet)
    end
  end
end
