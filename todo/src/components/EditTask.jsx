import React from "react";

function EditTask({ show, value, editList ,onChange}) {
  return (
    <>
      {show && (
        <div className="edit-todo">
          <div className="model">
            <div className="input-group">
            <label>Todo : </label>
              <input type="text" placeholder="Task....." value={value.todo} name="todo" onChange={onChange}/>
            </div>
            <div className="input-group">
              <label>Status : </label>
              <select value={value.isCompleted} name="isCompleted"  onChange={onChange}>
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
              </select>
            </div>
            <button type="button" onClick={editList} className="btn">
              Edit List
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTask;

EditTask.defaultProps = {
  show: true,
  value: { todo: "", isCompleted: false },
};
