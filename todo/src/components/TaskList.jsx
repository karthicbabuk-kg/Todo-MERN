import axios from "axios";
import EditTask from "./EditTask";
import { useState } from "react";

function TaskList({ task, setTasks }) {
  const [editShow, setEditShow] = useState(false);
  const [valueObj, setValueObj] = useState({});
  async function deleteTask(id) {
    let value = task.find((value, index) => {
      return index === id;
    });
    let data = await axios
      .delete(`http://localhost:8000/api/task/${value._id}`)
      .then((res) => res.data);
    setTasks(data);
  }
  async function editList() {
    let data = await axios
      .put(`http://localhost:8000/api/task/${valueObj._id}`, {
        todo: valueObj.todo,
        isCompleted: valueObj.isCompleted,
      })
      .then((res) => {
        return res.data;
      });
    setTasks(data);
    setValueObj({});
    setEditShow(false);
  }
  function handleInput(event) {
    let objname = event.target.name;
    let value = event.target.value;
    if (objname === "isCompleted") {
      value = value === "true" ? true : false;
    }
    setValueObj((prev) => {
      return { ...prev, [objname]: value };
    });
  }
  return (
    <>
      <div className="task-list">
        {task &&
          task.map((value, index) => {
            return (
              <div className="task" key={index}>
                <p>{value.todo}</p>
                <span>
                  <button>
                    <i
                      className="bi bi-pen"
                      onClick={() => {
                        setValueObj(value);
                        console.log(value);
                        setEditShow(true);
                      }}
                    ></i>
                  </button>
                  <button onClick={() => deleteTask(index)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </span>
              </div>
            );
          })}
      </div>
      <EditTask
        editList={editList}
        show={editShow}
        value={valueObj}
        onChange={handleInput}
      />
    </>
  );
}

export default TaskList;
