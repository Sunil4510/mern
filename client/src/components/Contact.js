import React, { useEffect, useState } from 'react';


const Contact = () => {
    

        const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

        const userContact = async () => {
                try {
                    const res = await fetch("/getData",{
                        method : "GET",
                        headers: {
                            "Content-Type" : "application/json"
                        }
                    });

                    const data = await res.json();
                    console.log(data);
                    setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

                    if(!res.status===200){
                            const error = new Error(res.error)
                            throw error;
                    }

                } catch (error) 
                {
                    console.log(error);
                }
        }

        useEffect(() => {
            userContact();
        }, []);

        const handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setUserData({...userData, [name]:value});
        }

        const contactForm = async (e) => {
                e.preventDefault();

                const { name, email, phone, message } = userData;
               
                const res = await fetch("/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name, email, phone, message
                    })
                });
                
                const data  = await res.json();
                console.log(res);
                console.log(data.error);       
                console.log(data.message);       
                if(!name || !email || !phone || !message){
                    window.alert("Please fill the form");
                }
                
                else
                {
                   window.alert("message send successfully");
                    setUserData({...userData, message:""});
                }

        }


    return (
        <React.Fragment>
                <div className="contact_info">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="res col-lg-10 offset-lg-1 d-flex justify-content-between">
                                <div className="contact_info_item d-flex justify-content-start align-items-center">
                                    <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">
                                            Phone
                                        </div>
                                        <div className="contact_info_text">
                                        {userData.phone}
                                        </div>
                                    </div>
                                </div>

                                <div className="contact_info_item d-flex justify-content-start align-items-center">
                                    <img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="phone"/>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">
                                            email
                                        </div>
                                        <div className="contact_info_text">
                                        {userData.email}
                                        </div>
                                    </div>
                                </div>

                                <div className="contact_info_item d-flex justify-content-start align-items-center">
                                    <img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="phone"/>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">
                                            Name
                                        </div>
                                        <div className="contact_info_text">
                                        {userData.name}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <br/>
    {/*contact us form*/}   
            <div className="contact_us">
                <div className="containers">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_title">
                            Get in Touch
                            </div>
                                <form method="POST" id="contact_form">
                                    <div className="inputs d-flex justify-content-between align-items-between">
                                        <input type="text" className="cname" placeholder="your name"
                                         name="name" value={userData.name} onChange={handleInput}required/>

                                        <input type="email" className="ename" placeholder="your email" 
                                        name="email" value={userData.email} onChange={handleInput} required/>

                                        <input type="number" className="num"  placeholder="your phone number"
                                         name="phone" value={userData.phone} onChange={handleInput} required/>
                                    </div>
                                    <div className="contact_form_text mt-5">
                                          <textarea className="message" placeholder="message"
                                          cols="93" rows="10" name="message"
                                          value={userData.message} onChange={handleInput} 
                                          required>
                                          </textarea>      
                                    </div>
                                    <div className="sends">
                                    <button className="send mt-4" onClick={contactForm}>Send Message</button>
                                    </div>
                                </form>  
                        <div>    
                    </div>  
                </div>
            </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Contact
