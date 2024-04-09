import React, { useEffect, useState } from 'react';
import useCartData from '../Hooks/UseCardData';
import { useParams } from 'react-router-dom';


const CardDetails = () => {
    const [detailData, setDetailData] = useState({});
    const {id} = useParams();
    const {cardData} =useCartData();
    console.log(cardData)
    

    useEffect(()=>{
        if (cardData) {
            const detailData =cardData.find(item => item.id === id);
            console.log(detailData)
            setDetailData(detailData);
           
        }
    },[cardData,id]);
    const {segment_name,estate_title } = detailData || {}
    return (
        <div>
           <h1 className='font-bold text-3xl'>segment name:{segment_name}</h1>
           <p className='font-bold text-5xl'>hii ami eikhn e{estate_title} </p> 
        </div>
    );
};

export default CardDetails;