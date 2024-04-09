import { useEffect, useState } from "react"

const useCartData = () => {
    const [cardData, setCardData] =useState([]);
   
    
    useEffect(()=>{
        const fetchData = async()=>{
            const res =await fetch('../../public/FakeData/fakeData.json')
            const data = await res.json();
            console.log(data)
            setCardData(data);
            
        }
        fetchData()
    },[])
   return {cardData}
};

export default useCartData;