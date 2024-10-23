import express from "express";
import prisma from "@repo/db"

const app=express();
app.use(express.json())

app.post('/payment', async (req,res)=>{
    const paymentsection= {
        token:req.body.token,
        user:req.body.userdetails,
        amount:req.body.amount
    }
    if(!paymentsection){
        res.json({
            message:"invalid details"
        })
    }

    try{
        const transaction=  await prisma.onRampTransaction.findUnique({
            where:{
                token:paymentsection.token
            }
        })
        if(!transaction){
            res.json({
                message:"invalid token"
            })
        }

        const updateTransaction= await prisma.onRampTransaction.update({
            where:{
                token:paymentsection.token
            },
            data:{
                status:"Success",
                amount:transaction?.amount
            }
        })

       await prisma.balance.update({
        where:{
            userId:transaction?.userId
        }, 
        data:{
            amount:{
                    increment:transaction?.amount || 0 
            }
        }
       })
        res.status(200).json({
            message:"Transaction successfull"
        })
    }catch(e){
        console.log("error", e)
        res.status(400).json({
            message:"transaction failed"
        })
    }

})

app.listen(3005 ,()=>{
    console.log("server listening on 3005")
})