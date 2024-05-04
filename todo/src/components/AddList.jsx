import axios from "axios";
import React, { useState } from "react";

function AddList({ setTasks }) {

  const [value, setValue] = useState();
  async function sendData() {
    let data = await axios
      .post("http://localhost:8000/api/task", {
        todo: value,
        isCompleted: false,
      })
      .then((res) => {
        return res.data;
      });
      setTasks(data)
      setValue('')
  }
  
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="New task...."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="button" onClick={sendData}>
        ADD
      </button>
    </div>
  );
}

export default AddList;
