import { Suspense } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import TicketCard from "./Component/TicketCard/TicketCard";

const fetchCustomers = async () => {
  const res = await fetch("/Customer.json");
  return res.json();
};

const customerPromise = fetchCustomers();

function App() {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Navbar></Navbar>

        <Banner></Banner>

        <div className="text-3xl font-bold mb-2 max-w-[1800px] mx-auto">Customer Tickets</div>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <TicketCard customerPromise={customerPromise}></TicketCard>
        </Suspense>
      </div>
    </>
  );
}

export default App;
