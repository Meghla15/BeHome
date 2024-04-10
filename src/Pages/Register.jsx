import React, { useContext } from 'react';
import { useForm} from "react-hook-form"
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const Register = () => {
    const { createUser }=UseAuth();
    
    const {register,handleSubmit,formState: { errors }} = useForm();
      const onSubmit =data =>{
        const {email, password} =data
        createUser(email,password)
        .then(result =>{
            console.log(result);
        })
      }
    return (
        <section className="p-6 dark:text-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}  noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50">
            <h2 className="w-full text-3xl font-bold leading-tight text-center">Please Register</h2>
            <div>
                <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                <input  {...register("name", { required: true })} id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                <input  {...register("email", { required: true })} id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <div>
                <label htmlFor="text" className="block mb-1 ml-1">PhotoURL</label>
                <input id="text" type="text" placeholder="Your Photo URL"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="password" className="block mb-1 ml-1">Password</label>
                <input  {...register("password", { required: true })} id="email" type="password" placeholder="Enter Your Password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-blue-00 dark:bg-gray-100" />
                {errors.password && <span className='text-red-600'>This field is required</span>}
            </div>
            
            <div>
                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 text-white">Register</button>
                <p className='text-xl font-bold text-center'> or</p>
                <Link to={"/login"}> <button  className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 text-white">Login</button></Link>
           
            </div>
        </form>
    </section>
    );
};

export default Register;