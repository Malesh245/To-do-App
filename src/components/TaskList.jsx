import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    setIsEditing(index);
    setNewTask(tasks[index]);
  };

  const handleSaveTask = (index) => {
    dispatch(editTask(index, newTask));
    setIsEditing(null);
    setNewTask("");
  };

  return (
    <ul className="list-none p-4 w-full max-w-sm mx-auto">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center mb-2 p-2 border rounded"
        >
          {isEditing === index ? (
            <div className="flex flex-grow items-center">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded mr-2 flex-grow"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                onClick={() => handleSaveTask(index)}
                className="bg-green-500 text-white p-2 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex flex-grow items-center">
              <span className="flex-grow">{task}</span>
              <button
                onClick={() => handleEditTask(index)}
                className="bg-yellow-500 text-white p-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
