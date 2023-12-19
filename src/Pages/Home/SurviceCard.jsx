import { Link } from "react-router-dom";

const SurviceCard = ({ survice }) => {
  const { title, img, price, description,_id } = survice;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>{description}</p> */}
          <p className="font-bold">Price : {price}$</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurviceCard;
