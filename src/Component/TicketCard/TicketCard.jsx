import React, { use } from "react";

const TicketCard = ({customerPromise}) => {

    const customerData = use(customerPromise)
    console.log(customerData);
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-2 gap-5">
      

      {
        customerData.map(customer=>
        <div className="card bg-base-100 w-[500px] shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{customer.title}</h2>
            <div className="bg-[#B9F8CF] w-[80px] rounded-3xl flex items-center p-2 space-x-2">
              <img src={customer.image} alt="" />{" "}
              <h1>{customer.status}</h1>
            </div>
          </div>
          <p>
           {customer.description}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <p className="text-gray-500">#{customer.id}</p>
              <h2 className="text-red-500 font-bold">{customer.priority}</h2>
            </div>
            <div className="flex gap-4">
                <h1 className="text-gray-500">{customer.customer}</h1>
                <div className="flex items-center space-x-1">
                    <img src="https://i.ibb.co.com/jvLpLgt8/Vector.png" alt="" /><p className="text-gray-500">{customer.createdAt}</p>
                </div>
            </div>
          </div>
        </div>
      </div>)
      }
      
    </div>
  );
};

export default TicketCard;
