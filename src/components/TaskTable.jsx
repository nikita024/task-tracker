import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, deleteTask } from "../redux/taskSlice";

const TaskTable = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [editingTask, setEditingTask] = useState(null);

  console.log("tasks", tasks);


  const handleEdit = (task) => {
    setEditingTask(task); 
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleSave = () => {
    dispatch(editTask(editingTask));
    setEditingTask(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="task-table">
      <h2>Tasks/Bugs</h2>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) =>
            editingTask && editingTask.id === task.id ? (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td><input name="title" value={editingTask.title} onChange={handleChange} /></td>
                <td><input name="description" value={editingTask.description} onChange={handleChange} /></td>
                <td>
                  <select name="priority" value={editingTask.priority} onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <select name="status" value={editingTask.status} onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td><input name="assignee" value={editingTask.assignee} onChange={handleChange} /></td>
                <td>{task.dateCreated}</td>
                <td>
                  <button onClick={() => setEditingTask(null)}>Cancel</button>
                  <button onClick={handleSave}>Save</button>
                </td>
              </tr>
            ) : (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.assignee}</td>
                <td>{task.dateCreated}</td>
                <td>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
