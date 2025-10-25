import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskForm from "./TaskForm";
import { createTask } from "../services/taskService";

jest.mock("../services/taskService", () => ({
  createTask: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("TaskForm Component", () => {
  const onTaskAdded = jest.fn();

  test("renders input fields and Add button", () => {
    render(<TaskForm onTaskAdded={onTaskAdded} />);
    
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("does not call createTask if title is empty", async () => {
    render(<TaskForm onTaskAdded={onTaskAdded} />);
    
    fireEvent.click(screen.getByText("Add"));

    await waitFor(() => {
      expect(createTask).not.toHaveBeenCalled();
      expect(onTaskAdded).not.toHaveBeenCalled();
    });
  });

  test("calls createTask and onTaskAdded when form is submitted with title", async () => {
    createTask.mockResolvedValueOnce({}); 

    render(<TaskForm onTaskAdded={onTaskAdded} />);

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Task Desc" },
    });

    fireEvent.click(screen.getByText("Add"));

    await waitFor(() => {
      expect(createTask).toHaveBeenCalledWith({
        title: "New Task",
        description: "Task Desc",
      });
      expect(onTaskAdded).toHaveBeenCalled();
    
      expect(screen.getByPlaceholderText("Title").value).toBe("");
      expect(screen.getByPlaceholderText("Description").value).toBe("");
    });
  });
});
