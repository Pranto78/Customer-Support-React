import React from 'react';
import { toast } from 'react-toastify';

const TaskStatus = ({selectedTicket,setIsResolved,isResolved,setInProgress,inProgress}) => {
    return (
        <div className='bg-white shadow-xl p-5 rounded-2xl space-y-2'>
            <h1 className='text-center text-xl font-bold'>{selectedTicket.title}</h1>
            <button onClick={()=>{
                setIsResolved(isResolved+1)
                toast('Completed!')
                setInProgress(inProgress-1)
            }} className="btn bg-green-500 w-full text-white text-xl">Complete</button>
        </div>
    );
};

export default TaskStatus;