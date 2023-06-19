import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AllUsers() {
  const [cusers, setCusers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getCusers() {
      try {
        const response = await axios.get("http://localhost:8070/cuser/");
        setCusers(response.data);
      } catch (error) {
        alert(error.message);
      }
    }
    getCusers();
  }, []);

  async function deleteCuser(id) {
    try {
      await axios.delete(`http://localhost:8070/cuser/delete/${id}`);
      setCusers(cusers.filter((cuser) => cuser._id !== id));
    } catch (error) {
      alert(error.message);
    }
  }

  const tableRef = useRef(null);

  function generatePDF() {
    const doc = new jsPDF();
    const now = new Date();
    const timestamp = now.toLocaleString();
    doc.text("Morawaka Hot Kitchen", 105, 15, { align: "center" });
    doc.text("Deniyaya Road, Milla Ela, Morawaka.", 105, 25, { align: "center" });
    doc.text(`Report generated on: ${timestamp}`, 105, 35, { align: "center" });
   
    const tableWidth = 190; // set the table width
    const tableX = (doc.internal.pageSize.width - tableWidth) / 2; // calculate the X position
    doc.autoTable({
      head: [
        [
          "Type",
          "Title",
          "First Name",
          "Last Name",
          "Job Position",
          "Email",
          "Phone Number",
          "Username",
          "Password",
        ],
      ],
      body: cusers.map((cuser) => [
        cuser.type,
        cuser.title,
        cuser.First_Name,
        cuser.Last_Name,
        cuser.Job_Position,
        cuser.email,
        cuser.Phone_Number,
        cuser.username,
        cuser.password,
      ]),
      didParseCell: (data) => {
        // center the text horizontally
        const cell = data.cell;
        if (typeof cell.styles !== "undefined" && cell.styles.halign === "center") {
          const textPos = cell.textPos;
          const cellWidth = cell.width;
          const textWidth = doc.getStringUnitWidth(cell.text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
          const newX = textPos.x + cellWidth / 2 - textWidth / 2;
          data.cursor.x = newX;
          cell.textPos.x = newX;
        }
      },
      margin: { top: 40 }, // add some top margin to the table
      startY: 50, // set the Y position
      tableWidth: tableWidth, // set the table width
      theme: "grid",
    });
    doc.save("user-report.pdf");
  }
  
  

  const filteredUsers = cusers.filter(cuser => {
    const fullName = `${cuser.Phone_Number} ${cuser.Last_Name}`;
    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      cuser.Job_Position.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>All Users</h1>
      <input
        type="text"
        placeholder="Search by name or job position"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="table" ref={tableRef}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Position</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((cuser) => (
            <tr key={cuser._id}>
              <td>{cuser.type}</td>
              <td>{cuser.title}</td>
              <td>{cuser.First_Name}</td>
              <td>{cuser.Last_Name}</td>
              <td>{cuser.Job_Position}</td>
              <td>{cuser.email}</td>
              <td>{cuser.Phone_Number}</td>
              <td>{cuser.username}</td>
              <td>{cuser.password}</td>


              <td>
              <Link to={`/cuser/${cuser._id}`} className="btn btn-warning" >
                Edit
              </Link>

              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCuser(cuser._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generatePDF} className="btn btn-proceed btn-green">
        Generate Report
      </button>

     
    </div>
  );
  }
