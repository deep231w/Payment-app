"use server"
import React from 'react';
import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { BalanceCard } from '../../../components/BalanceCard';
import { AddMoney } from '../../../components/AddMoney';
import { OnRampTransactions } from '../../../components/onRamptnxClient';

async function getBalance(){
    const session = await getServerSession(authOptions);

    // Check if the session is available
    if (!session?.user?.id) {
        console.error('User is not authenticated or user ID is missing.');
        return { amount: 0, locked: 0 }; // Return default balance if not authenticated
    }
    
    const balance = await prisma.balance.findFirst({
        where: { userId: Number(session.user.id) }
    });

    return {
        amount: balance?.amount || 0,
        locked: balance?.amount || 0
    };
}

async function getTransactions() {
    const session = await getServerSession(authOptions);

    const tnsx = await prisma.onRampTransaction.findMany({
        where: { userId: Number(session?.user?.id) }
    });

    return tnsx.map(t => ({
        id: t.id,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
        startTime: t.startTime
    }));
}

export default async function Transfer(){
    const balance = await getBalance();
    const transactions = await getTransactions();

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl text-[#6a51a6] font-bold mb-6">Transfer</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Add Money Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Money</h2>
                    <AddMoney />
                </div>
                
                {/* Balance and Transactions Section */}
                <div className="col-span-2">
                    <div className="bg-white rounded-lg shadow p-6 mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Balance</h2>
                        <BalanceCard amount={balance.amount} locked={balance.locked} />
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h2>
                        <OnRampTransactions transactions={transactions} />
                    </div>
                </div>

            </div>
        </div>
    );
}
