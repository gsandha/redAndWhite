import { useState } from "react"
import axios from "axios"
const Login=()=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    let handleSubmit = async () => {
      let payload = {
        email,
        password:pass,
      };
      try {
        let sendData = await axios.post(
          `http://localhost:9000/users/login`,
          payload
        );
        if (sendData.status === 200) {
        
          localStorage.setItem("token", sendData.data.token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `${sendData.data.token}`;
          alert("Login Successfull")
        }
      } catch (error) {
      alert("Login failed")
      }
    };
    return (
        <>
        <h1>Login Page</h1>
        <div className="form-container">
            <label htmlFor="email">Email:</label> 
            <input id="email" type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
        </>
    )
}

export {Login}
