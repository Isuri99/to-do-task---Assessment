import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";

jest.mock("./TaskItem", () => ({ task, onTaskUpdated }) => (
  <div data-testid="task-item">{task.title}</div>
));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("TaskList Component", () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Desc 1", completed: false },
    { id: 2, title: "Task 2", description: "Desc 2", completed: true },
  ];
  const onTaskUpdated = jest.fn();

  test("renders a list of TaskItem components", () => {
    render(<TaskList tasks={tasks} onTaskUpdated={onTaskUpdated} />);

    const taskItems = screen.getAllByTestId("task-item");
    expect(taskItems.length).toBe(tasks.length);

    tasks.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });
  });

  test("renders empty list when no tasks are provided", () => {
    render(<TaskList tasks={[]} onTaskUpdated={onTaskUpdated} />);
    const taskItems = screen.queryAllByTestId("task-item");
    expect(taskItems.length).toBe(0);
  });
});
