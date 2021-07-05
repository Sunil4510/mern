import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <React.Fragment>
        <div className="not-found">
            <div className="nofound">
                <h1 className="err">404</h1>
            </div>
            <p className="msg">WE ARE SORRY, PAGE NOT FOUND!</p>
            <br></br>
            <p className="msgs">THE PAGE YOUR LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARLY UNAVILABLE</p>
            <NavLink to="/" className="back"><span className="bac">Back To HomePage</span></NavLink>

        </div>
        </React.Fragment>
    )
}

export default Error
