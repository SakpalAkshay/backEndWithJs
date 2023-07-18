const express = require('express');
const app = express();
app.listen(3000);


let user = {"name":"Akshay"};



app.get("/user", (req,res) =>{
    res.send(user);
})

app.get("/user/:name", (req,res) =>{
    if(getUser(req.params.name)){
        res.json({message: "Yes User Exist"});
    }
    else{
        res.status(404).send({message: "User Doesnt Exist"});
    }
})






function getUser(name){
    for(i in user){
        if(name == user[i]){
            return true;
        }
    }
    return false;
}