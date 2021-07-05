const express = require('express');
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { findOne } = require('../model/userSchema');
const router = express.Router();
const user = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
// router.get("/",(req,res)=>{
//     res.send("Hello From Router");
// });


//REGISTERATION PART

router.post('/register',async (req,res)=>{
    const {name,email,phone,profession,password,cpassword} = req.body;

    if(!name|| !email|| !phone || !profession|| !password|| !cpassword){
        return res.status(422).json({error:"please fill all the details"});
    }
    if(!validator.isEmail(email)){
        return res.status(422).json({error:"please enter a valid email id"});
    }
try
{
  const userExsit= await user.findOne({email:email});

  if(userExsit)
  {
    return res.status(422).json({error:"Email Already Exists"});
  }else if(password != cpassword){
      return res.status(422).json({error:"passwords are not matching"});
  }else{
     const users = new user({name,email,phone,profession,password,cpassword} );
     const userReg = await users.save();
    if(userReg)
    {
        res.status(201).json({message:"user registered successfully"});
    }
    else
    {
        res.status(500).json({error:"server problem"});
    }
  } 

}catch(err)
{
    console.log(err);
}

});

//LOGIN PART


router.post("/logins",async(req,res)=>{
    try {
        let token;
        const {email,password} = req.body;
        if(!email || !password){
               return res.status(400).json({error:"plz fill the data"}); 
        }
         
        const userLogin = await user.findOne({email:email});
        if(!userLogin)
        {
            res.status(400).json({error:"Invalid Credientials"});    
        }
        else
        {
           const isMatch = await bcrypt.compare(password,userLogin.password);
            token = await userLogin.generateAuthToken();
           console.log(token);
            
          
                if(isMatch){
                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly:true
                    });
                    res.status(200).json({message:"Valid Credientials"});
                } else{
                    res.status(400).json({error:"Invalid Credientials"});  
                }
           
        }

    } catch (error) {
        console.log(error);
    }
});
    router.get("/about", authenticate ,(req,res) => {
            console.log(`hello`);
            res.send(req.rootUser)
    });
    
    router.get("/getData", authenticate ,(req,res) => {
        console.log(`hello`);
        res.send(req.rootUser)
});

router.post("/contact", authenticate ,async (req,res) => {
    try {
        const {name, email, phone, message} = req.body;

        if(!name || !email || !phone || !message )
        {
            console.log("plz fill the form");
             res.status(404).json({error:"plz fill the contact form"});
        }

        else{

        const userContact = await user.findOne({_id: req.userID});
        if(userContact){
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message:"user message is send"});
        }
        
    }
    } catch (error) {
        console.log(error);
    }
})


router.get('/logout', (req, res) => {
    console.log("logout");
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("user logout");
});


module.exports = router;













//    .then((userExsit)=>{
//        if(userExsit){
//            return res.status(422).json({error:"Email Already Exists"});
//        }

//        const users = new user({name,email,profession,password,cpassword} );
//        users.save().then(()=>{
//            res.status(201).json({message:"user registered successfully"});
//        }).catch((err)=>{
//            res.status(500).json({error:"server problem"});
//        });

//    }).catch((err)=>{
//        console.log(err);
//    });
// });