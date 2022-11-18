
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("testing-the-todo-list-remainder", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "test-todo-a",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("adding-new-task-to-todo-list", () => {
    const t_len = all.length;
    add({
      title: "test-todo-b",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(t_len  + 1);
  });

  //markAsComplete function
  test("mark-complete-the-todo-list", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("Over-due-the-todo-when-true", () => {
    add({
      title: "test-the-overdue-when-true",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("due-todo-today-when-true", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("due-later-todo-when-true", () => {
    add({
      title: "testing-due-later-when-true",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});