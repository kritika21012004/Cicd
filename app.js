console.log("app.js file added");
console.log(new Date());
const app= require('express')();
app.get('/',(req,res)=>{
    res.json({message:'webserver running with ci cd'});
})
app.listen(7000,()=>{
    console.log("server running on 7000");
})