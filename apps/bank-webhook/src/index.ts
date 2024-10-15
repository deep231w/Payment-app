import express from "express";

const app=express();

app.post('/payment', (req,res)=>{
    const paymentsection= {
        token:req.body.token,
        user:req.body.userdetails,
        amount:req.body.amount
    }
})