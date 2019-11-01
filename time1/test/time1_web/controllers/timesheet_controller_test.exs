defmodule Time1Web.TimesheetControllerTest do
  use Time1Web.ConnCase

  alias Time1.Timesheets

  @create_attrs %{numhours: 42, sheetname: "some sheetname", task1: "some task1", task2: "some task2", task3: "some task3", task4: "some task4", task5: "some task5", task6: "some task6", task7: "some task7", task8: "some task8"}
  @update_attrs %{numhours: 43, sheetname: "some updated sheetname", task1: "some updated task1", task2: "some updated task2", task3: "some updated task3", task4: "some updated task4", task5: "some updated task5", task6: "some updated task6", task7: "some updated task7", task8: "some updated task8"}
  @invalid_attrs %{numhours: nil, sheetname: nil, task1: nil, task2: nil, task3: nil, task4: nil, task5: nil, task6: nil, task7: nil, task8: nil}

  def fixture(:timesheet) do
    {:ok, timesheet} = Timesheets.create_timesheet(@create_attrs)
    timesheet
  end

  describe "index" do
    test "lists all timesheets", %{conn: conn} do
      conn = get(conn, Routes.timesheet_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Timesheets"
    end
  end

  describe "new timesheet" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.timesheet_path(conn, :new))
      assert html_response(conn, 200) =~ "New Timesheet"
    end
  end

  describe "create timesheet" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.timesheet_path(conn, :create), timesheet: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.timesheet_path(conn, :show, id)

      conn = get(conn, Routes.timesheet_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Timesheet"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.timesheet_path(conn, :create), timesheet: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Timesheet"
    end
  end

  describe "edit timesheet" do
    setup [:create_timesheet]

    test "renders form for editing chosen timesheet", %{conn: conn, timesheet: timesheet} do
      conn = get(conn, Routes.timesheet_path(conn, :edit, timesheet))
      assert html_response(conn, 200) =~ "Edit Timesheet"
    end
  end

  describe "update timesheet" do
    setup [:create_timesheet]

    test "redirects when data is valid", %{conn: conn, timesheet: timesheet} do
      conn = put(conn, Routes.timesheet_path(conn, :update, timesheet), timesheet: @update_attrs)
      assert redirected_to(conn) == Routes.timesheet_path(conn, :show, timesheet)

      conn = get(conn, Routes.timesheet_path(conn, :show, timesheet))
      assert html_response(conn, 200) =~ "some updated sheetname"
    end

    test "renders errors when data is invalid", %{conn: conn, timesheet: timesheet} do
      conn = put(conn, Routes.timesheet_path(conn, :update, timesheet), timesheet: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Timesheet"
    end
  end

  describe "delete timesheet" do
    setup [:create_timesheet]

    test "deletes chosen timesheet", %{conn: conn, timesheet: timesheet} do
      conn = delete(conn, Routes.timesheet_path(conn, :delete, timesheet))
      assert redirected_to(conn) == Routes.timesheet_path(conn, :index)
      assert_error_sent 404, fn ->
        get(conn, Routes.timesheet_path(conn, :show, timesheet))
      end
    end
  end

  defp create_timesheet(_) do
    timesheet = fixture(:timesheet)
    {:ok, timesheet: timesheet}
  end
end
