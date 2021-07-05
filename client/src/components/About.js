import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import pic from '../images/SUNIL.jpeg';
import sun from '../images/apj.jpg';

const About = () => {
        const history = useHistory();
        const [userData, setUserData] = useState({});
        const callAboutPage = async () => {
                try {
                    const res = await fetch("/about",{
                        method : "GET",
                        headers:{
                            Accept : "application/json",
                            "Content-Type" : "application/json"
                        },
                        credentials : "include"
                    });

                    const data = await res.json();
                    console.log(data);
                   setUserData(data);

                    if(!res.status===200){
                            const error = new Error(res.error)
                            throw error;
                    }

                } catch (error) {
                    console.log(error);
                    history.push("/login");
                }
        }
    
        useEffect(() => {
            callAboutPage();
        }, []);

    return (
       <React.Fragment>
       <div className="about-page">
            <div className="container emp-profile" id="about">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-2 m-5 profile">
                            <img className="images" src={userData.name=== "sunil dattatray kurapati" ? pic:sun}
                             alt="about" style={{width:200,height:200,borderRadius:12}}/>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head m-5">
                                <h5>{userData.name}</h5>
                                <h6>{userData.profession}</h6>
                                <p className="profile-rating mt-4 mb-5">RANKINGS: <span className="rate">1/10</span></p>

                                <ul className="nav nav-tabs" id="tabs">

                                    <li className="nav-item" role="tablist">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab">TimeLine</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-2 mt-5 prof">
                            <button className="edit">Edit Profile</button>
                        </div>    
                    </div>


                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work ms-5">
                            <p>WORK LINKS</p>
                            <div className="gap">
                            <a href="https://www.youtube.com/" target="_sunil">Youtube</a><br/><br/>
                            <a href="https://www.instagram.com" target="_sunil">Instagram</a><br/><br/>
                            <a href="https://www.LinkedIn.com" target="_sunil">LinkedIn</a><br/><br/>
                            <a href="https://www.github.com" target="_sunil">Github</a><br/><br/>
                            <a href="https://www.facebook.com" target="_sunil">Facebook</a><br/><br/>
                            </div>
                            </div>
                        </div>


                        <div className="col-md-8 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>{userData._id}</label>
                                        </div>
                                    </div>
                                    
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label>NAME</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>{userData.name}</label>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>{userData.profession}</label>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label>Education</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>BE Information Technology </label>
                                        </div>
                                    </div>
                                    

                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>2 years</label>
                                        </div>
                                    </div>
                                    
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label>Hourly rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>10$/hr</label>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label>Total projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>5+</label>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label>Avaliability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>1 year </label>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
       </React.Fragment>
    )
}

export default About
