import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="p-6 bg-green-100 dark:text-gray-800 container mx-auto rounded-2xl mb-14">
	<div className=" grid gap-4 text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50 border-[1px] border-slate-300">
        
			<h1 className='text-3xl font-extrabold font-neon mb-6'>Please Login Here</h1>
			<form noValidate="" action="" className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div>
					<label htmlFor="lastName" className="text-sm sr-only">Email address</label>
					<input id="lastName" type="text" placeholder="Email address" className="w-full p-3 rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                <div className='flex justify-between'>
                <span>Forget Password?</span>
                <Link to="/register"><span className='text-blue-700 font-bold'>Register</span></Link>
                </div>
				<button type="button" className="w-full py-2 font-semibold rounded bg-blue-600 text-gray-50">Login</button>
			</form>
            
		</div>
		<div className='col-span-3'>
             <h1 className="text-4xl  font-extrabold dark:text-gray-900">Build Connection With Us</h1>
             <p className='font-neon mt-10 w-2/3 mx-auto text-center text-gray-600'>We value the opportunity to connect with our community of homeowners, renters, and property enthusiasts. Whether you have questions about a specific property, need assistance navigating our platform, or simply want to share feedback, we're here to listen and assist you. Connect with us through our various channels – whether it's through email, phone, or social media – and let's start a conversation. Your input is invaluable to us as we continually strive to improve and enhance your experience with Your BeHome. We look forward to hearing from you and building a lasting connection together</p>
             </div>
	</div>
</section>
    );
};

export default Login;