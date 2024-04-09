import 'animate.css';
const Card = ({item}) => {
    const {estate_title, id,segment_name,price,status,area,location,facilities,image_url} = item || {};

    return (
        <div className="card w-96 bg-base-100 shadow-xl  ' ">
  <figure><div  className="">
  <img src={image_url} />
  </div></figure>
  <div className="card-body">
    <h2 className="card-title animate__animated animate__bounce">{estate_title}</h2>
    <p>{location}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Card;