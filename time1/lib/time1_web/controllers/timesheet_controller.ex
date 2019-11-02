defmodule Time1Web.TimesheetController do
  use Time1Web, :controller

  alias Time1.Timesheets
  alias Time1.Timesheets.Timesheet

  # CHANGE: def index
  def index(conn, _params) do
    current_user = conn.assigns.current_user
    timesheets = Timesheets.list_timesheets(current_user.id)
    render(conn, "index.html", timesheets: timesheets)
  end

  # def index(conn, _params) do
  #   timesheets = Timesheets.list_timesheets()
  #   render(conn, "index.html", timesheets: timesheets)
  # end

  # def current_index(conn, %{"user_id" => user_id}, _params) do
  #   timesheets = Timesheets.list_user_timesheets(user_id)
  #   render(conn, "index.html", timesheets: timesheets)
  # end

  def new(conn, _params) do
    changeset = Timesheets.change_timesheet(%Timesheet{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"timesheet" => timesheet_params}) do
    timesheet_params = Map.put(timesheet_params, "user_id", conn.assigns[:current_user].id)

    case Timesheets.create_timesheet(timesheet_params) do
      {:ok, timesheet} ->
        conn
        |> put_flash(:info, "Timesheet created successfully.")
        |> redirect(to: Routes.timesheet_path(conn, :show, timesheet))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  # id -- timesheet id
  def show(conn, %{"id" => id}) do
    timesheet = Timesheets.get_timesheet!(id)
    render(conn, "show.html", timesheet: timesheet)
  end

  def edit(conn, %{"id" => id}) do
    timesheet = Timesheets.get_timesheet!(id)
    changeset = Timesheets.change_timesheet(timesheet)
    render(conn, "edit.html", timesheet: timesheet, changeset: changeset)
  end

  def update(conn, %{"id" => id, "timesheet" => timesheet_params}) do
    timesheet = Timesheets.get_timesheet!(id)

    case Timesheets.update_timesheet(timesheet, timesheet_params) do
      {:ok, timesheet} ->
        conn
        |> put_flash(:info, "Timesheet updated successfully.")
        |> redirect(to: Routes.timesheet_path(conn, :show, timesheet))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", timesheet: timesheet, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    timesheet = Timesheets.get_timesheet!(id)
    {:ok, _timesheet} = Timesheets.delete_timesheet(timesheet)

    conn
    |> put_flash(:info, "Timesheet deleted successfully.")
    |> redirect(to: Routes.timesheet_path(conn, :index))
  end
end
