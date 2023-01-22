import {useState } from "react";
import  "../RSTYLES/rform.css";
const Form = () => {
    let[name,setname]=useState("")
    let[email,setEmail]=useState("")
    let[phonenumber,setPhonenumber]=useState("")
    let submit=(e)=>{
        e.preventDefault()
        let data={name,email,phonenumber}
        fetch("http://localhost:1003/text",{
            method:"POST",
            header:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
          
        alert(`Register successfully`)
    }

    return ( 
        <div className="fifth">
            <div className="fifth1">
                <h1>GET IN TOUCH</h1>
                <p>please complete the form and we will get back to you</p>
            </div>
            <div className="fifth2">
                <form onSubmit={submit}>
                    <label className="priya1" htmlFor="" >Name</label>
                    <br />
                    <input type="text"required placeholder="Enter your name"value={name} onChange={(e)=>setname(e.target.value)} />
                    <br />
                    <label className="priya1" htmlFor="">Email</label>
                    <br />
                    <input type="email" required placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br />
                    <label className="priya" htmlFor="">Mobile Number</label>
                    <br />
                    <input type="tel" placeholder=" enter mobile number"  maxLength={10} minLength={10}  value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
                    <br />
                    <button>Register Now</button>
                </form>

            </div>
        </div>
     );
}
 
export default Form;