import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded mb-2 w-full max-w-sm"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded w-full max-w-sm"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
