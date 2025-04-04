import React, { useState } from "react";
import "./style.css"

let Validation=()=>{

    let [username,setusername]=useState("");
    let [password,setpassword]=useState("");
    let [check,setcheck]=useState(false);
    let [x,setx]=useState()
    let [y,sety]=useState()
    let array=[
        {
            id:1,
            userna:"santhoshkumar392002@gmail.com",
            pass:12345
        },
        {
            id:2,
            userna:"santhoshdeveloper24@gmail.com",
            pass:258741
        },
        {
            id:3,
            userna:"santhosh292002@gmail.com",
            pass:1123456
        }
    ]

    let  change=(e)=>{
        if(e.target.name==="usern"){
            setusername(e.target.value)
        }
        else if(e.target.name==="pass"){
            setpassword(e.target.value)
        }
    }

    let Submit=(e)=>{
        e.preventDefault()

        if((username==="") || (password==="")){
            setcheck(true);
        }
        else{

            setx(false);
            sety(false);

           let x= array.find((e)=>{

                // return e.username===username ? setx(true) : "" || e.password===password ? sety(true) : ""
                return e.userna==username ? e.pass==password ? setx(true) : sety(true) : "";
 
            })

            console.log(x);
        }
       
        
    }

    return (
        <div>
            <form onSubmit={Submit}>
                <input type="text" name="usern" value={username} onChange={change} placeholder="Enter the Username"></input>
                {check && username==="" ? <p style={{color:"red"}}>Please enter the username</p> : ""}
                {(x===false) && (y===false) ? <p style={{color:"red"}}>Invaild Username</p> : ""} 
                <br></br>

                <input type="password" name="pass" value={password} onChange={change} placeholder="Enter the Password"></input>
                {check && password==="" ? <p style={{color:"red"}}>Please enter the password</p> : ""}
                {y ? <p style={{color:"red"}}>Invaild Password</p> : ""}
                {/* { (y===false) ? <p style={{color:"red"}}>CRT</p> : ""} */}
                <br></br>

                
                <button>Submit</button>
                {x ? <p style={{color:"green"}}>Login Successfully</p>: ""}
            </form>
        </div>
    )

}

export default Validation;