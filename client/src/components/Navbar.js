import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
import log from '../images/l1.png';
import { UserContext } from '../App';

const Nav = () =>{
  return(
    <React.Fragment>
        <li className="nav-item active">
           <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
        </li>
        <li className="nav-item">
           <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
</React.Fragment>

  )} 

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

    const RenderMenu = () =>{
      if(state){
        return(
          <React.Fragment>
            <Nav/>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
          </React.Fragment>
        )
      }
      else{
        return(
          <React.Fragment>
            <Nav/>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
                
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Registration</NavLink>
             </li>
          </React.Fragment>
        )
      }
    }

    return (
        <React.Fragment> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
        <img src={log} alt="logo" style={{width:180,height:50,paddingLeft:40}}/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
          
            <RenderMenu/>
          </ul>    
        </div>
      </nav>

      </React.Fragment> 
    )
}

export default Navbar
