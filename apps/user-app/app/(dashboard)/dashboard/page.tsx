
import prisma from '@repo/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { DashboardClient } from '../../../components/dashBoardClient';

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
    const session=await getServerSession(authOptions);
    if(!session){
      return []
    }

    const transaction= await prisma.p2pTransfer.findMany({
      where:{
            fromUserId:Number(session?.user?.id)
      }
    })

    return transaction.map(tx=>({
            id:tx.id,
            amount:tx.amount,
            startTime:tx.timeStamp
              }))
}
export default async function Dashboard(){
    const balance= await getBalance();
    const transaction= await getTransactions();
    if(!transaction){
      return <div>No Recent Transactions</div>
    }
    return <DashboardClient transaction={transaction} amount={balance.amount} />
  
}


{/* <div className="container mx-auto p-6">
    
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold"><div>{balanceAmount}</div></h2>
      <p>Wallet Balance</p>
    </div>
  
    <div className="flex justify-around mb-6">
      <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg">Send Money</button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">Pay Bills</button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg">Add Money into wallet</button>
    </div>
  
 
    <div>
      <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-green-500">
        <div className="flex justify-between">
          <p className="font-medium">Received from John</p>
          <span className="text-green-500 font-bold">₹ 1,000</span>
        </div>
        <p className="text-sm text-gray-500">Oct 24, 2024</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-red-500">
        <div className="flex justify-between">
          <p className="font-medium">Sent to Alice</p>
          <span className="text-red-500 font-bold">₹ 500</span>
        </div>
        <p className="text-sm text-gray-500">Oct 23, 2024</p>
      </div>
    </div>
  </div> */}