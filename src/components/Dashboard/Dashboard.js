import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import "./Dashboard.css"

// chart updates on every price change, causing flicker effect. 
function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <div className="flex justify-center"><h1>Please select a currency</h1></div>;
  }
  return (
    <div className="dashboard">
      <h2>{`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;