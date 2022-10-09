const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');
const port = 5000;
// const Jwt = require('jsonwebtoken');
// const jwtKey = 'e-com';
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    // result = result.toObject();
    // delete result.password
    // Jwt.sign({result}, jwtKey, {expiresIn:"2h"},(err,token)=>{
    //     if(err){
    //         resp.send("Something went wrong")  
    //     }
         res.send(result)
    // })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))