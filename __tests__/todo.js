
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Remainder testing the todo list", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "Todotest-1",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("adding-new todo to todo_list", () => {
    const t_len = all.length;
    add({
      title: "Testtodo-2",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(t_len  + 1);
  });

  //markAsComplete function
  test("markcomplete the todo list-1", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("Over-due todos if true ", () => {
    add({
      title: "Test-overdue if true",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("Due-today todos if true", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("Due-later todos id true", () => {
    add({
      title: "Test due later if true",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});