import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
      name: "", email: "", phone: "", profession: "", password: "", cpassword: ""  
    });

    let name,value;

    const handleinputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user,[name]:value})
    }

    const PostData = async (e) => {
      e.preventDefault();

      const {name, email, phone, profession, password, cpassword } = user;
      const res = await fetch("/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            name, email, phone, profession, password, cpassword        
      })
    });

      console.log(res.status);
      const data = await res.json();
      
      if(res.status === 422 || !data){
        window.alert("invalid registration");
        console.log("invalid registration");
      }
      else{
        window.alert("valid registration");
        console.log("valid registration");
        history.push("/login");
      }
    }
    return (
      <React.Fragment> <br/><br/>
        <div className="container page">
          <div className="signin-sign-up">
            <form method="POST" className="signup-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="zmdi zmdi-account"></i>
                <input type="text" placeholder="Enter Your Name" name="name" id="name" autoComplete="off" value={user.name} onChange={handleinputs} required/>
              </div>
             
              <div className="input-field">
                <i className="zmdi zmdi-email"></i>
                <input type="email" placeholder="Enter Your Email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleinputs} required/>
              </div>
              <div className="input-field">
                <i className="zmdi zmdi-phone"></i>
                <input type="number" placeholder="Enter Your number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleinputs} required/>
              </div>
              <div className="input-field">
                <i className="zmdi zmdi-slideshow"></i>
                <input type="text" placeholder="Enter Your Profession" name="profession" id="profession" autoComplete="off" value={user.profession} onChange={handleinputs} required/>
              </div>
              <div className="input-field">
                <i className="zmdi zmdi-lock"></i>
                <input type="password" placeholder="Enter Your Password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleinputs} required/>
              </div>
              <div className="input-field">
                <i className="zmdi zmdi-lock"></i>
                <input type="password" placeholder="Confirm Your Password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleinputs} required/>
              </div>
              <input type="submit" value="Register" className="btn" onClick={PostData}/>
              <p className="acc">Alredy have an account?</p><NavLink className="account-text" id="sign-in-link"  to="/login">sign in</NavLink>
            </form>
          </div>
        </div>
    
      </React.Fragment> 
    )
    
}

export default Signup
