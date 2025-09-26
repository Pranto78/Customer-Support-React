import React from 'react';

const ResolvedTask = ({ resolvedTickets }) => {
  return (
    <div className='space-y-4'>
      {resolvedTickets.map((ticket) => (
        <p key={ticket.id} className="rounded-lg shadow bg-[#E0E7FF] text-lg p-4">
          {ticket.title}
        </p>
      ))}
    </div>
  );
};

export default ResolvedTask;
