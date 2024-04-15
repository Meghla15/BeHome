import React, { useEffect, useState } from 'react';
import useCartData from '../Hooks/UseCardData';
import { useParams } from 'react-router-dom';


const CardDetails = () => {
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

    const {segment_name,estate_title,facilities } = singleData || {}
   
    return (
        <div className="hero min-h-screen container mx-auto rounded-2xl bg-base-200 mb-40">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://assets.lbmjournal.com/uploads/2019/11/new-single-family-home.jpg" className="w-[50%] rounded-lg shadow-2xl" />
          <div className=''>
          <p className='border-[1px] bg-red-700 text-white rounded-3xl w-1/3 text-center p-2 mb-2'>Status</p>
            <h1 className="text-2xl font-neon font-semibold mb-2">Estate Name : {estate_title}</h1>
            <h1 className="text-2xl font-neon font-bold">Estate Title :<span className='font-extrabold font-neon '>Spacious Family Home in Suburbia</span></h1>
          
            <p> <span className="py-6 text-xl font-semibold">Description: </span> This beautiful single-family home boasts 4 bedrooms, 2 bathrooms, and a large backyard, making it perfect for families seeking comfort and space. Nestled in the serene suburbs, this property offers a peaceful retreat from the hustle and bustle of city life. With ample natural light and modern amenities, including a spacious living room and fully equipped kitchen, this home is ideal for both relaxation and entertaining guests. Enjoy outdoor gatherings or simply unwind in the privacy of your backyard oasis. Conveniently located near schools, parks, and shopping centers, this home offers the perfect blend of tranquility and convenience.</p>


            <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-600">
       <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
     </svg>
         <p className="font-semibold text-neon"></p>
        </div>
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500">
       <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
     </svg>
     
         <p><span  className="font-semibold" >Area:</span></p>
     
        </div>
        </div>

        <p className="font-bold">Facilities: </p>
        <ul className='list-disc pl-5'>
                   {
                   facilities?.map((facilities, index) => (
                    <li className='opacity-70' key={index}> {facilities}</li>
                     ))}
                   </ul>
                   <p className='font-semibold font-neon text-2xl mt-3'>Price : <span className='font-neon font-extrabold '> 2500000$</span></p>
          </div>
        </div>
      </div>

    );
};

export default CardDetails;