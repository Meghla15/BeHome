import { useEffect, useState } from "react"

const useCartData = () => {
    const [cardData, setCardData] =useState([]);
   
    
    useEffect(()=>{
        const fetchData = async()=>{
            const res =await fetch('/FakeData/fakeData.json')
            const data = await res.json();
            setCardData(data);
            
        }
        fetchData()
    },[])
   return {cardData}
};

export default useCartData;