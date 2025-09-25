import React, { use, useState } from "react";
import { toast } from "react-toastify";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const TicketCard = ({ customerPromise, setInProgress, inProgress,setIsResolved,isResolved}) => {
  const customerData = use(customerPromise);

  const [selectedTickets, setSelectedTickets] = useState([]); // array instead of null

  const handleCardClick = (customer) => {
    setInProgress(inProgress + 1);
    toast("In progress");

    // add ticket without replacing (append)
    setSelectedTickets((prev) => [...prev, customer]);
  };

  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-[3fr_1fr] gap-6">
      {/* Left side: tickets */}
      <div className="grid grid-cols-2 gap-6">
        {customerData.map((customer) => (
          <div
            key={customer.id}
            onClick={() => handleCardClick(customer)}
            className="card bg-base-100 shadow-sm w-full cursor-pointer hover:shadow-md transition"
          >
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">{customer.title}</h2>
                <div
                  className={`min-w-[120px] max-w-fit rounded-3xl flex items-center justify-center px-4 py-2 space-x-2 ${
                    customer.status === "In-Progress"
                      ? "bg-[#F8F3B9]"
                      : "bg-[#B9F8CF]"
                  }`}
                >
                  <img
                    src={customer.image}
                    alt={customer.status}
                    className="w-6 h-6 rounded-full"
                  />
                  <h1 className="text-sm font-medium">{customer.status}</h1>
                </div>
              </div>
              <p>{customer.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <p className="text-gray-500">#{customer.id}</p>
                  <h2
                    className={`${
                      customer.priority === "HIGH PRIORITY"
                        ? "text-red-500"
                        : customer.priority === "MEDIUM PRIORITY"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {customer.priority}
                  </h2>
                </div>
                <div className="flex gap-4">
                  <h1 className="text-gray-500">{customer.customer}</h1>
                  <div className="flex items-center space-x-1">
                    <img
                      src="https://i.ibb.co.com/jvLpLgt8/Vector.png"
                      alt=""
                    />
                    <p className="text-gray-500">{customer.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Task Status */}
      <div className="p-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold mb-4">Task Status</h2>
          {selectedTickets.length === 0 ? (
            <p>Select a ticket to add to Task Status</p>
          ) : (
            selectedTickets.map((ticket) => (
              <TaskStatus inProgress={inProgress} setInProgress={setInProgress} isResolved={isResolved} setIsResolved={setIsResolved} key={ticket.id} selectedTicket={ticket}></TaskStatus>
            ))
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold mb-4 mt-3">Resolved Task</h2>
          <ResolvedTask></ResolvedTask>
          <p>No resolved tasks yet.</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
