import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="p-6 dark:text-gray-800">
        <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50">
            <h2 className="w-full text-3xl font-bold leading-tight text-center">Please Register</h2>
            <div>
                <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="text" className="block mb-1 ml-1">PhotoURL</label>
                <input id="text" type="text" placeholder="Your Photo URL"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="password" className="block mb-1 ml-1">Password</label>
                <input id="email" type="password" placeholder="Enter Your Password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-blue-00 dark:bg-gray-100" />
            </div>
            
            <div>
              <Link to={'/login'}>  <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 text-white">Register</button></Link>
            </div>
        </form>
    </section>
    );
};

export default Register;