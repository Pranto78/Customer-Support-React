import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import TicketCard from "./Component/TicketCard/TicketCard";
import { ToastContainer} from 'react-toastify';
import Footer from "./Component/Footer/Footer";


const fetchCustomers = async () => {
  const res = await fetch("/Customer.json");
  return res.json();
};

const customerPromise = fetchCustomers();



function App() {
  const [inProgress,setInProgress] = useState(0);
  const [isResolved,setIsResolved] = useState(0);
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Navbar></Navbar>

        <Banner inProgress={inProgress} isResolved={isResolved}></Banner>

        <div className="text-3xl font-bold mb-2 max-w-[1800px] mx-auto">Customer Tickets</div>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <TicketCard inProgress={inProgress} setInProgress={setInProgress} customerPromise={customerPromise} isResolved={isResolved} setIsResolved={setIsResolved}></TicketCard>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;
