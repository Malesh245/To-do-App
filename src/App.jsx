import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
