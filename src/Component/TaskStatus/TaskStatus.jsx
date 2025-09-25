import React from 'react';

const TaskStatus = ({selectedTicket}) => {
    return (
        <div className='bg-white shadow-xl p-5 rounded-2xl space-y-2'>
            <h1 className='text-center text-xl font-bold'>{selectedTicket.title}</h1>
            <button className="btn bg-green-500 w-full text-white text-xl">Complete</button>
        </div>
    );
};

export default TaskStatus;