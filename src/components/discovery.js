export default function Discovery() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap px-10">
          <div className="w-full md:w-1/2 pr-3 lg:pr-20 md:self-center">
            <h1 className="uppercase text-abu font-bold text-3xl lg:text-5xl">
              discovery our top <span className="text-secondary">shoes</span>{" "}
            </h1>
            <p className="text-abu text-sm mt-3 leading-5 lg:text-xl">
              Egyptians began making shoes from woven reeds as early as 1550 BC.
              Worn as overshoes, they were boat-shaped and had straps
              constructed of long.
            </p>
            <button className="bg-secondary px-7 py-3 mt-5 rounded-xl text-primary font font-semibold lg:text-lg">
              Details
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:self-end">
            <div className="flex-col space-y-5">
              <div className="relative h-24 lg:h-32">
                <img
                  src="./assets/treadmil.jpg"
                  alt=""
                  className="rounded-xl w-full h-full object-cover object-center"
                />
                <div className="absolute top-1 right-1 md:top-2 md:right-2">
                  <button className="px-5 py-1 bg-primary text-secondary rounded-lg font-bold">
                    Detail
                  </button>
                </div>
              </div>
              <div className="relative h-24 lg:h-32">
                <img
                  src="./assets/treadmil.jpg"
                  alt=""
                  className="rounded-xl w-full h-full object-cover object-center"
                />
                <div className="absolute top-1 left-1 md:top-2 md:left-2">
                  <button className="px-5 py-1 text-primary bg-secondary rounded-lg font-bold">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
