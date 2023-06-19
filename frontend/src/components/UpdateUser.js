import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();
  const [cuser, setCuser] = useState({
    type: "",
    title: "",
    First_Name: "",
    Last_Name: "",
    Job_Position: "",
    email: "",
    Phone_Number: "",
    username: "",
    password: "",
    
  });

  const { type, title, First_Name, Last_Name, Job_Position, email, Phone_Number, username, password } = cuser;

  const onInputChange = (e) => {
    setCuser({ ...cuser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadCuser = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/cuser/get/${id}`);
        setCuser(response.data.cuser);
      } catch (error) {
        alert(error.message);
      }
    };

    loadCuser();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8070/cuser/update/${id}`, cuser);
      setCuser(response.data);
      window.location = "/container";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Update User</h1>
      <form onSubmit={onSubmit}>

      <div className="form-group">
          <label htmlFor="type"> Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={type}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="First_Name"> First Name</label>
          <input
            type="text"
            className="form-control"
            id="First_Name"
            name="First_Name"
            value={First_Name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Last_Name"> Last Name</label>
          <input
            type="text"
            className="form-control"
            id="Last_Name"
            name="Last_Name"
            value={Last_Name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="Job_Position"> Job Position</label>
          <input
            type="text"
            className="form-control"
            id="Job_Position"
            name="Job_Position"
            value={Job_Position}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Phone_Number"> Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="Phone_Number"
            name="Phone_Number"
            value={Phone_Number}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    
    </div>
  );
}
