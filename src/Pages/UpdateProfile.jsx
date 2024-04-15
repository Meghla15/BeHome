import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdateProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="w-2/4 mx-auto mt-12">
        <h1 className="animate__animated animate__bounce text-center font-neon lg:text-3xl text-xl font-bold mb-2">
          Update Your Profile
        </h1>
        <form>
          <input  type="text" placeholder="Your Name" className="input mb-2 input-bordered input-primary w-full mx-auto" />
          <input required type="email" placeholder="Email" className="input mb-2 input-bordered input-primary w-full mx-auto" />
        <div className="relative">
        
          <input required type={showPassword ? "text" : "password"}placeholder="Password" className="input mb-2 input-bordered input-primary w-full mx-auto" /> 
          <span className="absolute right-1 bottom-[20px]" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</span>
        </div>
         
        <div className="relative">
        
          <input required type={showPassword ? "text" : "password"}placeholder="Set Password" className="input mb-2 input-bordered input-primary w-full mx-auto" /> 
          <span className="absolute right-1 bottom-[20px]" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</span>
        </div>
         
          <button className="btn btn-primary mx-auto w-full font-bold text-xl mb-44">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
