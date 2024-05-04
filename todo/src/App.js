import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import AddList from "./components/AddList";
import TaskList from "./components/TaskList";

function App() {
  async function getData() {
    let data = await axios
      .get("http://localhost:8000/api/task")
      .then((res) => res.data);
    setTasks(data);
  }
  useEffect(() => {
    getData();
  }, []);
  const [task, setTasks] = useState();
  return (
    <div className="container">
      <AddList setTasks={setTasks} />
      <TaskList task={task} setTasks={setTasks} />
    </div>
  );
}

export default App;
