import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id ,img} = service;

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const number = form.number.value;
    const ammount = form.ammount.value;
    const description = form.description.value;
    const order = {
      name,
      date,
      number,
      ammount,
      description,
      service: title,
      serviceId: _id,
      img
    };
    console.log(order);

    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
          <div className="card  w-2/3  shadow-2xl bg-base-100">
            <p className="text-center text-4xl">Tile: {title}</p>
            <form onSubmit={handleCheckOut} className="card-body">
              <div className="flex justify-center items-center">
                <div className="form-control w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full pl-4">
                  <input
                    type="date"
                    name="date"
                    placeholder="booking date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Contact Number :</span>
                  </label>
                  <input
                    type="number"
                    name="number"
                    placeholder="Your Phone number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full pl-4">
                  <label className="label">
                    <span className="label-text">Due Ammount </span>
                  </label>
                  <input
                    type="number"
                    name="ammount"
                    defaultValue={price}
                    placeholder="your email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  className="input input-bordered h-32"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-success">
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
