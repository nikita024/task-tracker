import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const taskCountByStatus = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  const taskCountByPriority = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  const statusLabels = Object.keys(taskCountByStatus);
  const statusCounts = Object.values(taskCountByStatus);

  const priorityLabels = Object.keys(taskCountByPriority);
  const priorityCounts = Object.values(taskCountByPriority);

  const statusData = {
    labels: statusLabels,
    datasets: [
      {
        label: "Tasks by Status",
        data: statusCounts,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384CC", "#36A2EBCC", "#FFCE56CC"],
      },
    ],
  };

  const priorityData = {
    labels: priorityLabels,
    datasets: [
      {
        label: "Tasks by Priority",
        data: priorityCounts,
        backgroundColor: ["#FF9F40", "#4BC0C0", "#9966FF"],
        hoverBackgroundColor: ["#FF9F40CC", "#4BC0C0CC", "#9966FFCC"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="task-chart">
      <h2>Task Charts</h2>
      <div className="chart-container">
        <div className="chart">
          <div className="chart-title">Task Distribution by Status</div>
          <Pie data={statusData} options={options} />
        </div>
        <div className="chart">
          <div className="chart-title">Task Distribution by Priority</div>
          <Pie data={priorityData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TaskChart;