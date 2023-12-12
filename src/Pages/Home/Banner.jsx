const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-full"
        />
        <div className="absolute flex items-center left-0 top-0 w-full  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="text-white w-1/3">
            <p className="text-5xl">Affordable Price For Car Servicing</p>
            <p className="text-2xl my-7">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error btn-outline">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full"
        />
        <div className="absolute left-0 top-0 w-full  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="text-white w-1/3">
            <p className="text-5xl">Affordable Price For Car Servicing</p>
            <p className="text-2xl my-7">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error btn-outline">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
        <div className="absolute left-0 top-0 w-full  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="text-white w-1/3">
            <p className="text-5xl">Affordable Price For Car Servicing</p>
            <p className="text-2xl my-7">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error btn-outline">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full"
        />
        <div className="absolute left-0 top-0 w-full  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="text-white w-1/3">
            <p className="text-5xl">Affordable Price For Car Servicing</p>
            <p className="text-2xl my-7">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error btn-outline">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
