import React from 'react';

const Footer = () => {
    return (

        <div className='bg-black mt-8'>

            <div className='max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6 p-15 space-y-3'>
            <div>
                <h1 className='text-2xl text-white mb-3'>CS — Ticket System</h1>
                <p className='text-gray-300'>A customer ticket is a digital record of a customer’s request, issue, or inquiry submitted to a company’s support or service team.</p>
            </div>

            <div className='ml-7'>
                <h1 className='text-2xl text-white mb-3 space-y-3'>Company</h1>
                <p className='text-gray-300'>About Us</p>
                <p className='text-gray-300'>Our Mission</p>
                <p className='text-gray-300'>Contact Saled</p>
            </div>

            <div>
                <h1 className='text-2xl text-white mb-3'>Services</h1>
                <p className='text-gray-300'>Products & Services</p>
                <p className='text-gray-300'>Customer Stories</p>
                <p className='text-gray-300'>Download Apps</p>
            </div>

            <div>
                <h1 className='text-2xl text-white mb-3'>Information</h1>
                <p className='text-gray-300'>Privacy Policy</p>
                <p className='text-gray-300'>Terms & Conditions</p>
                <p className='text-gray-300'>Join Us</p>
            </div>

            <div>
                <h1 className='text-2xl text-white mb-3'>Social Links</h1>
                <a className='text-gray-300'><i class="fa-brands fa-x-twitter"></i> @CS-X Ticket</a>
                <p className='text-gray-300'><i class="fa-brands fa-linkedin"></i> @CS-In Ticket</p>
                <p className='text-gray-300'><i class="fa-brands fa-facebook"></i> @CS-FB Ticket</p>
                <p className='text-gray-300'><i class="fa-solid fa-envelope"></i> support@cst.com</p>
            </div>
            </div>

            <hr className='text-gray-700' />

            <div className='flex justify-center items-center p-7'>
                <h1 className='text-md text-gray-400'>© 2025 CS — Ticket System. All rights reserved.</h1>
            </div>
           
        </div>
    );
};

export default Footer;