import React,{useContext, useState} from 'react'
import { NavLink , useHistory} from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

  const {state, dispatch} = useContext(UserContext);
  
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/logins",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();
    if(res.status===400 || !data)
    {
      window.alert("invalid credentials");
    }
    else
    {
      dispatch({type:"USER", payload:true});
      window.alert("login Successfull");
      history.push("/")
    }
  }
    return (
        <React.Fragment> 
        <br/><br/>
        <div className="container page ">
          <div className="signin-sign-up">
            <form method="POST" className="signin-form">
              <h2 className="title" id="sign">Sign in</h2>
              
              <div className="input-field">
                <i className="zmdi zmdi-email"></i>
                <input type="email" placeholder="Enter Your Email" name="email" 
                id="email" autoComplete="off" value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                required/>
              </div>
              
              <div className="input-field">
                <i className="zmdi zmdi-lock"></i>
                <input type="password" placeholder="Enter Your Password"
                 name="password" id="password" autoComplete="off" 
                 value={password} onChange={(e)=>setPassword(e.target.value)} 
                 required />
              </div>
              <input type="submit" value="Login" className="btn" onClick={loginUser}/>
              <p className="acc">Dont have an account?</p><NavLink className="account-text" id="sign-in-link"  to="/signup">sign up</NavLink>
            </form>
          </div>
        </div>
       
      </React.Fragment> 
    )
}

export default Login
