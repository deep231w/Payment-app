import React from 'react';
import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { BalanceCard } from '../../../components/BalanceCard';
import { AddMoney } from '../../../components/AddMoney';
import { OnRampTransactions } from '../../../components/onRamptnxClient';

async function getBalance(){
    const session= await getServerSession(authOptions);

      // Check if the session is available
      if (!session?.user?.id) {
        console.error('User is not authenticated or user ID is missing.');
        return { amount: 0, locked: 0 }; // Return default balance if not authenticated
    }
    const balance= await prisma.balance.findFirst({
        where:{
            userId:Number(session.user.id)
        }
    })
    return {
        amount:balance?.amount || 0 ,
        locked: balance?.amount || 0
    }
        
    
}

async function getTransactions() {
    const session= await getServerSession(authOptions);

    const tnsx= await prisma.onRampTransaction.findMany({
        where:{
            userId:Number(session?.user?.id)
        }
    })
    return tnsx.map(t=>({
            id:t.id,
            amount:t.amount,
            status:t.status,
            provider:t.provider,
            startTime:t.startTime
        }))
}

export default async function Transfer(){
            const balance= await getBalance();
            const transactions= await getTransactions();
    return <div className="w-screen">
    <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Transfer
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
            <AddMoney/>
        </div>
        <div>
            <BalanceCard amount={balance.amount} locked={balance.locked} />
            <div className="pt-4">
                <OnRampTransactions transactions={transactions}/>
            </div>
        </div>
    </div>
</div>
}