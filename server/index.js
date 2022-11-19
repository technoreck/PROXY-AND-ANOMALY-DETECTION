const express = require("express");
const app = express();
const student = require('./helpers/userdatabase')
const User = require("./helpers/User")
const json = require('./database/class.json');

student.sync().then(()=> console.log("[DB] Student database is ready "))
app.use(express.json())
app.post("/",async(req,res)=>{
    await User.create(req.body)
    res.status(200).send("successful")
  
})

app.get('/user',async (req,res)=>{
    req.query = Buffer.from(req.query).toString('binary');
    try{
    const user = await User.findOne({where:{id:req.query.id}})
        if(user.password == req.query.password){
            console.log(`[SERVER] Found the username ${user.username}`)
            res.status(200).json(json[user.class])     
        } else{
    res.status(404).send({error:"wrong username or password"})
        }
    } catch(e){
        res.status(500).send({error:"Error occured in the server "})
    }
})


app.get("/class",(req,res)=>{
    const user_id = req.query.id;
    const password = req.query.password;

    res.send({
        'user_id': user_id,
        'password':password
      });
})

app.listen(3000, () => {
  console.log("[SERVER] Server ready");
});