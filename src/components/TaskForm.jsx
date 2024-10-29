import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskForm = ({ setIsFormVisible }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
    assignee: "",
    dateCreated: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({
      id: Date.now(),
      title: "",
      description: "",
      priority: "Low",
      status: "Pending",
      assignee: "",
      dateCreated: new Date().toISOString().split("T")[0],
    });
    setIsFormVisible(false);
  };

  return (
    <div>
        <form className="task-form" onSubmit={handleSubmit}>
        <h2>Create New Task</h2>
        <input
            type="text"
            name="title"
            placeholder="Title"
            value={task.title}
            onChange={handleChange}
            required
        />
        <textarea
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
        ></textarea>
        <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <select name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            value={task.assignee}
            onChange={handleChange}
        />
        <button type="submit">Add Task</button>
        </form>
    </div>
  );
};

export default TaskForm;
