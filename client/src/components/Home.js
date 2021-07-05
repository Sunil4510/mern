import React, { useEffect, useState } from 'react'

const Home = () => {
    const [username, setName] = useState({});
    const [show, setShow] = useState(false);
        const userHomePage = async () => {
            try {
                const res = await fetch("/getData",{
                    method:"GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                console.log(data);
                setName(data);
                setShow(true);

            } catch (error) {
                console.log(error);
            }
        }

    useEffect(() => {
        userHomePage();
    }, []);


    return (
        <React.Fragment>
        <div className="home-page">
            <div className="home-div">
            <p className="pt-5 home">Welcome</p>
            <h1 className="home">{username.name}</h1><br/>
            <h2 className="mern">{show ? "Happy To See You Back":"We are the  MERN developers"}</h2>
            </div>
        </div>

        </React.Fragment>
    )
}

export default Home
