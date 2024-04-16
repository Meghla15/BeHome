import React, { useEffect, useState } from 'react';
import useCartData from '../Hooks/UseCardData';
import { Link, useParams } from 'react-router-dom';
import { tabTitle } from '../Hooks/DynamicTitle/FunctionTitle';


const CardDetails = () => {
  tabTitle ("BeHome | Details Page")
    const [singleData, setSingleData] = useState({})
    const {id} = useParams();
    const {cardData} =useCartData();
    console.log(cardData)
    

    useEffect(()=>{
        if (cardData) {
            const singleData =cardData.find(item => item.id == id);
            
            setSingleData(singleData);
            console.log(singleData)
           
        }
    },[cardData,id]);

    const {segment_name,estate_title,description, price, area,location,image_url ,status , facilities } = singleData || {}
   
    return (
        <div className="hero min-h-screen container mx-auto rounded-2xl bg-base-200 mb-40">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image_url}className="w-[50%] rounded-lg shadow-2xl" />
          <div className=''>
          <p className='border-[1px] bg-red-700 text-white font-bold text-xl rounded-3xl w-1/3 text-center p-2 mb-2'>{status}</p>
            <h1 className="text-2xl font-neon font-semibold mb-2">Estate Name : <span className='font-extrabold font-neon '>{estate_title}</span></h1>
            <h1 className="text-2xl font-neon font-bold">Estate Title :<span className='font-extrabold font-neon '>{segment_name}</span></h1>
          
            <p> <span className="py-6 text-xl font-semibold">Description: </span> {description}</p>


            <div className="flex lg:flex-row flex-col gap-4 mt-3">
        <div className="flex ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-600">
       <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
     </svg>
         <p className="font-semibold text-neon"><span  className="font-semibold">Location: </span>{location}</p>
        </div>
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500">
       <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
     </svg>
     
         <p><span  className="font-semibold" >Area: </span> {area}</p>
     
        </div>
        </div>

        <p className="font-bold">Facilities: </p>
        <ul className='list-disc pl-5'>
                   {
                   facilities?.map((facilities, index) => (
                    <li className='opacity-70' key={index}> {facilities}</li>
                     ))}
                   </ul>
                   <p className='font-semibold font-neon text-2xl mt-3'>Price : <span className='font-neon font-extrabold '> {price}$</span></p>
                  

                  <Link to="/">
                  <a href="#_" className=" mt-2 relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-green-500"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Back to Home</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
                  </Link>
          </div>
          
        </div>

      
      </div>

    );
};

export default CardDetails;