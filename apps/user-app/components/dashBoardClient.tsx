

export function DashboardClient({amount}:{amount:number}){
    return <div className="container mx-auto p-6">
    
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold"><div>₹ {amount/ 100}</div></h2>
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
  </div>
}