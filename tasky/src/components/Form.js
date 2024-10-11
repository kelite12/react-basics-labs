import React from "react";
const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label for="level">
            Priority:
        <input
          type="text"
          name="level"
          list="priority-options"
          onChange={(event) => props.change(event)}
          required
        />
            <datalist id="priority-options">
              <option value="Low"/>
              <option value="Medium"/>
                <option value="High" />
              </datalist>
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;