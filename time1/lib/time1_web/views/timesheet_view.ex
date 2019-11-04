defmodule Time1Web.TimesheetView do
  use Time1Web, :view
  alias Time1Web.TimesheetView

  def render("index.json", %{timesheets: timesheets}) do
    %{data: render_many(timesheets, TimesheetView, "timesheet.json")}
  end

  def render("show.json", %{timesheet: timesheet}) do
    %{data: render_one(timesheet, TimesheetView, "timesheet.json")}
  end

  # QUESTION: uuid?!
  def render("timesheet.json", %{timesheet: timesheet}) do
    %{
      id: timesheet.id,
      sheetname: timesheet.sheetname,
      task1: timesheet.task1,
      task2: timesheet.task2,
      task3: timesheet.task3,
      task4: timesheet.task4,
      task5: timesheet.task5,
      task6: timesheet.task6,
      task7: timesheet.task7,
      task8: timesheet.task8,
      numhours: timesheet.numhours,
      uuid: timesheet.uuid
    }
  end
end
