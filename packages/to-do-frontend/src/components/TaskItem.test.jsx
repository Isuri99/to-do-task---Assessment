import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { completeTask } from "../services/taskService";


jest.mock("../services/taskService", () => ({
  completeTask: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("TaskItem Component", () => {
  const task = { id: 1, title: "Test Task", description: "Test Desc", completed: false };
  const onTaskUpdated = jest.fn();

  test("renders task title and description", () => {
    render(<TaskItem task={task} onTaskUpdated={onTaskUpdated} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Desc")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  test("calls completeTask and onTaskUpdated when confirmed", async () => {
    window.confirm = jest.fn(() => true);
    completeTask.mockResolvedValueOnce({});

    render(<TaskItem task={task} onTaskUpdated={onTaskUpdated} />);
    fireEvent.click(screen.getByText("Done"));

    await waitFor(() => {
      expect(completeTask).toHaveBeenCalledWith(task.id);
      expect(onTaskUpdated).toHaveBeenCalled();
    });
  });

  test("does not call completeTask or onTaskUpdated when cancelled", async () => {
    window.confirm = jest.fn(() => false);

    render(<TaskItem task={task} onTaskUpdated={onTaskUpdated} />);
    fireEvent.click(screen.getByText("Done"));

    await waitFor(() => {
      expect(completeTask).not.toHaveBeenCalled();
      expect(onTaskUpdated).not.toHaveBeenCalled();
    });
  });

  test("does not show Done button when task is completed", () => {
    render(
      <TaskItem
        task={{ ...task, completed: true }}
        onTaskUpdated={onTaskUpdated}
      />
    );

    expect(screen.queryByText("Done")).toBeNull();
  });
});
