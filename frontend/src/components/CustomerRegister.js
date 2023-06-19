import React ,{useState} from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CustomerRegister(){
    const[type, settype] = useState("");
    const[title, settitle] = useState("");
    const[First_Name, setFirstname] = useState("");
    const[Last_Name, setLastname] = useState("");
    const[email, setemail] = useState("");
    const[Phone_Number, setPhonenumber] = useState("");
    const[username, setusername] = useState("");
    const[password, setpassword] = useState("");
   
    function sendData(e){
        e.preventDefault();
       
        const newCustomer ={
            type,
            title,
            First_Name,
            Last_Name,
            email,
            Phone_Number,
            username,
            password,
        }
        axios.post("http://localhost:8070/user/reg",newCustomer).then(()=>{
        alert("Registered..!")
        
       }).catch((err)=>{
        alert(err)
       })
    }

    return(
        <div className="reg" >
            <form onSubmit={sendData}>
                <h3>Become A Member</h3>
                <div className="form-group">
                    <label htmlFor="type"> Type</label>
                    <input type="text" className="form-control" id="type" placeholder="type" onChange={(e)=>{
                        settype(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="title"> Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={(e)=>{
                        settitle(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="First_Name"> First Name</label>
                    <input type="text" className="form-control" id="First_Name" placeholder="Enter first name" onChange={(e)=>{
                        setFirstname(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Last_Name"> Last Name</label>
                    <input type="text" className="form-control" id="Last_Name"  placeholder="Enter last name" onChange={(e)=>{
                        setLastname(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=>{
                        setemail(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Phone_Number"> Phone Number</label>
                    <input type="text" className="form-control" id="Phone_Number"  placeholder="Enter phone number" onChange={(e)=>{
                        setPhonenumber(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="username"> Username</label>
                    <input type="text" className="form-control" id="username"  placeholder="Enter username" onChange={(e)=> {
                        setusername(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password"> Password</label>
                    <input type="text" className="form-control" id="password"  placeholder="Enter your password" onChange={(e)=> {
                        setpassword(e.target.value);
                    }}/>
                </div>
  
                <button type="submit" className="btn btn-primary"> Register</button>
            </form>
        </div>
    )
}
