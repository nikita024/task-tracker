import React, { useEffect, useState } from "react";
import TaskTable from "../components/TaskTable";
import TaskForm from "../components/TaskForm";
import TaskChart from "./TaskChart";
import TaskModal from "./TaskModal";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTaskClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
        <Navbar />
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <button className="add-task-button" onClick={handleAddTaskClick}>
                Add New Task
            </button>
            <TaskTable />
            <TaskChart />
            <TaskModal
                isVisible={isFormVisible}
                onClose={() => setIsFormVisible(false)}
            >
                <TaskForm setIsFormVisible={setIsFormVisible}/>
            </TaskModal>
        </div>
    </>
  );
};

export default Dashboard;

