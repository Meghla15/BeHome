import useCartData from "../../Hooks/UseCardData";
import Card from "../Card/Card";
import 'animate.css';

const Cards = () => {
    const {cardData} = useCartData()
    // console.log(cardData)
    return (
        <div className='mb-40'>
            <h1 className="lg:text-4xl text-3xl font-bold text-center lg:mt-10 mt-6 font-neon">Our Residential</h1>

            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-10 mt-6  animate__animated animate__bounceInLeft'>
                
                {/* {
                   cardData.map((item)=><Card></Card>) 
                } */}
                {
                    cardData.map((item)=><Card key={item.id} item={item}></Card>)
                }

            </div>
        </div>
    );
};

export default Cards;