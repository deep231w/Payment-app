"use server"
import prisma from "@repo/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export const SendMoney= async(to:string, amount:number)=>{
        const session= await getServerSession(authOptions);
        
        const from= session?.user?.id
             if(!from){
                 return {
                    message:"user not exist"
                 }}

        const toUser= await prisma.user.findFirst({
            where:{number:to}
            })
            if (!toUser){
              return{
                message:"toUser doesnit exist!"
                    }}

        await prisma.$transaction(async(tx)=>{
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;


        const fromBalance= await tx.balance.findUnique({
            where:{
                userId:Number(from)
                }
            })
        if(!fromBalance || fromBalance.amount < amount){
            throw new Error("Transaction Failed ,Insufficient Fund")
        }
        
        await tx.balance.update({
            where:{
                userId:Number(from)
            }, 
            data:{
                amount:{decrement:amount}
            }
        })
        await tx.balance.update({
            where:{
                userId:toUser.id
            },
            data:{
                amount:{increment:amount}
            }
        })

        await tx.p2pTransfer.create({
            data: {
                fromUserId: Number(from),
                toUserId: toUser.id,
                amount,
                timeStamp: new Date()
            }
          })

        })
}