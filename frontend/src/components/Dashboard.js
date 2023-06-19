import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

function Dashboard() {
  const [cusers, setCusers] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    function getCusers() {
      axios
        .get("http://localhost:8070/cuser/")
        .then((res) => {
          setCusers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getCusers();
  }, []);

  useEffect(() => {
    function getCustomers() {
      axios
        .get("http://localhost:8070/customer/")
        .then((res) => {
          setCustomers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getCustomers();
  }, []);

  const cuserCount = cusers.length;
  const customerCount = customers.length;

  useEffect(() => {
    const cusersChart = new Chart("cusersChart", {
      type: "bar",
      data: {
        labels: ["Total Users", "Total Customers"],
        datasets: [
          {
            label: "Count",
            data: [cuserCount, customerCount],
            
            backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 255, 102, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)"],

            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => {
      cusersChart.destroy();
    };
  }, [cuserCount, customerCount]);

  return (
    <body>
      <div></div>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#" className="active">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-user" undefined></i>
              <span className="text">
                <h3>{cuserCount}</h3>
                <p>Total Users</p>
              </span>
            </li>

            <li>
              <i class="bx bxs-gas-pump"></i>
              <span className="text">
                <h3>{customerCount}</h3>
                <p>Total Customers</p>
              </span>
            </li>
          </ul>

          <canvas id="cusersChart" width="400" height="300"></canvas>
        </main>
      </section>
    </body>
  );
}

export default Dashboard;
