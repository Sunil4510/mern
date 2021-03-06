import React, { createContext, useReducer } from 'react';      
import { Route,Switch } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Logout from './components/Logout';

import { initialState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
    return(
    <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/about"><About/></Route>              
        <Route exact path="/contact"><Contact/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/signup"><Signup/></Route>
        <Route exact path="/logout"><Logout/></Route>
        <Route><Error/></Route>
        </Switch>
    )}


const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <React.Fragment> 

            <UserContext.Provider value={{state, dispatch}}>
                 <Navbar/>
                <Routing/>
            </UserContext.Provider>

        </React.Fragment>        
    )
}
export default App

