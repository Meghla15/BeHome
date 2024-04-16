// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { tabTitle } from "../Hooks/DynamicTitle/FunctionTitle";
import UseAuth from "../Hooks/UseAuth";


const UpdateProfile = () => {

  tabTitle ("BeHome | Update Profile")
  const {user} = UseAuth()
  // console.log(user)

  
  const handleSubmit = e =>{
    e.preventDefault()
    console.log(e.target.fullName.value)
  }
  
   
  return (
    <div>
      <div className="lg:w-2/3 w-full mx-auto mt-16 space-y-3">

          <h1 className="text-center text-teal-700 font-bold font-neon text-3xl animate__animated animate__bounce">Update Your Profile Here</h1>
          <img className="w-48 h-48 rounded-full mx-auto mt-6" src={user.photoURL || "https://static.semrush.com/blog/uploads/media/00/ec/00ecd2aa2fb3e40ff9bc7315222672f6/what-does-error-404-not-found-mean.svg"} alt="" />
          <p className="text-center font-neon text-xl">Email: <span className="font-bold">{user.email || "Email Not Founded"}</span></p>
          <form onSubmit={handleSubmit} className="mx-auto w-1/3 ">
          <input type="text" name="fullName" placeholder="User Name" className="input mb-2 input-bordered rounded-3xl w-full " />
          <input type="text" placeholder="PhotoURL" className="input  mb-2 input-bordered rounded-3xl w-full " />
          <button type="submit" className="btn btn-primary mx-auto w-full font-bold text-xl rounded-3xl mb-44">Submit</button>
          </form>
      </div>







      

    </div>
  );
};

export default UpdateProfile;
