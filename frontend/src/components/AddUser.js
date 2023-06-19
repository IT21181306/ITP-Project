import React ,{useState} from "react"
import axios from "axios";


export default function AddUser(){
    const[type, settype] = useState("");
    const[title, settitle] = useState("");
    const[First_Name, setFirstname] = useState("");
    const[Last_Name, setLastname] = useState("");
    const[Job_Position, setJobposition] = useState("");
    const[email, setemail] = useState("");
    const[Phone_Number, setPhonenumber] = useState("");
    const[username, setusername] = useState("");
    const[password, setpassword] = useState("");
    const [emailExistsError, setEmailExistsError] = useState("");
   
    async function sendData(e){
        e.preventDefault();
       
        if (Phone_Number.length !== 10) {
            alert("Phone number must be 10 digits");
            return;
        }

        if (emailExistsError) {
            return;
          }

          if (!type || !title || !First_Name || !Last_Name || !Job_Position || !email || !Phone_Number || !username || !password) {
            alert("All fields are required");
            return;
          }

          if (password.length < 5) {
            alert("Password must be at least 5 characters");
            return;
        }

        if (!/\d/.test(password)) {
            alert("Password must include at least one number");
            return;
        }

        const newCuser ={
            type,
            title,
            First_Name,
            Last_Name,
            Job_Position,
            email,
            Phone_Number,
            username,
            password,
        }
        await axios.post("http://localhost:8070/cuser/add",newCuser).then(()=>{
        alert("User Added")
        
       }).catch((err)=>{
        alert(err)
       })
        }

    return(
        <div className="container">
           <form onSubmit={sendData}>

           <div className="form-group">
                <label for="type">Type</label>
                <input type="text" className="form-control" id="type"  placeholder="type" onChange={(e)=>{
                    settype(e.target.value);
                }}/>
            
            </div>

             <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control" id="title"  placeholder="Enter title" onChange={(e)=>{
                    settitle(e.target.value);
                }}/>
            
            
            </div>

            <div className="form-group">
                <label for="First_Name">First Name</label>
                <input type="text" className="form-control" id="First_Name"  placeholder="Enter first name" onChange={(e)=>{
                    setFirstname(e.target.value);
                }}/>
            
            </div>

            <div className="form-group">
                <label for="Last_Name">Last Name</label>
                <input type="text" className="form-control" id="Last_Name"  placeholder="Enter last name" onChange={(e)=>{
                    setLastname(e.target.value);
                }}/>
            
            </div>

            <div className="form-group">
                <label for="Job_Position">Job Position</label>
                <input type="text" className="form-control" id="Job_Position"  placeholder="Enter job position" onChange={(e)=>{
                    setJobposition(e.target.value);
                }}/>
            
            </div>

            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email"  placeholder="Enter email" onChange={(e)=>{
                    setemail(e.target.value);
                }}/>
            
            </div>

            <div className="form-group">
                <label for="Phone_Number">Phone Number</label>
                <input type="number"  className="form-control" id="Phone_Number"  placeholder="Enter phone number" onChange={(e)=>{
                    setPhonenumber(e.target.value);
                }}/>
            
            </div>

            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="username"  placeholder="Enter username" onChange={(e)=>{
                    setusername(e.target.value);
                }}/>
            
            </div>

            <div className="form-group">
                <label for="">Password</label>
                <input type="text" className="form-control" id="password"  placeholder="Enter password" onChange={(e)=>{
                    setpassword(e.target.value);
                }}/>
            
            </div>
  
  

  <button type="submit" className="btn btn-proceed btn-green">Submit</button>
</form>
        </div>
    )
}

