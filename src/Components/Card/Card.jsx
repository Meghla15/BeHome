import { Link } from "react-router-dom";

const Card = ({item}) => {
    const {estate_title, id,price,status,area,location,facilities,image_url} = item || {};

    return (
       <Link to={`/card-details/${id}`}> <div className="card container flex justify-between items-stretch h-full w-96 bg-base-100 shadow-xl">
       <figure><div>
       <img className="h-1/3" src={image_url} />
       </div></figure>
       <div className="card-body py-2">
         <h2 className="card-title font-bold lg:text-2xl text-xl">{estate_title}</h2>
        <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-600">
       <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
     </svg>
         <p className="font-semibold text-neon">{location}</p>
        </div>
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500">
       <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
     </svg>
     
         <p><span  className="font-semibold" >Area:</span> {area}</p>
     
        </div>
        </div>
       <div>
       <p className="font-bold">Facilities: </p>
        <ul className='list-disc pl-5'>
                   {facilities?.map((facilities, index) => (
                    <li className='opacity-70' key={index}> {facilities}</li>
                     ))}
                   </ul>
       </div>
       <p><span className="font-bold font-neon">Price :</span> {price}$</p>
         <div className="card-actions  ">
           <button className="btn w-2/3 mx-auto btn-primary">View Property</button>
         </div>
       </div>
     </div></Link>
    );
};

export default Card;