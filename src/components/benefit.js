export default function Benefit() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap px-10">
          <div className="w-full mt-10 md:my-auto md:w-1/2">
          <h1 className="uppercase text-abu font-bold text-3xl lg:text-5xl">
            3 benefits you get from our{" "}
            <span className="text-secondary">Shoes</span>
          </h1>
            <div className="flex justify-center mt-10 md:mt-14">
              <div className="relative">
                <div className="p-10 lg:p-12 border border-secondary rounded-full">
                  <div className="bg-red-200 w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full"></div>
                </div>
                <div
                  id="sepatu"
                  name="sepatu"
                  className="absolute top-3 right-0"
                >
                  <img src="./assets/biru.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-14 flex-col md:w-1/2 md:pt-32">
            <div className="flex gap-x-8">
              <div className="">
                <div className="p-2 border border-secondary rounded-full">
                  <div className="flex justify-center items-center w-10 h-10 bg-secondary rounded-full">
                    <h1 className=" text-putih text-xl font-bold">1</h1>
                  </div>
                </div>
                <div className="relative h-44 md:h-24 w-1/2 border-r border-secondary"></div>
              </div>
              <div>
                <h1 className="font-semibold">Benefits of Comfortable Shoes</h1>
                <p>
                  Keep Your Feet & Body Happy. Comfortable shoes not only keep
                  the feet happy, but they also help customers with back
                  troubles.
                </p>
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="">
                <div className="p-2 border border-secondary rounded-full">
                  <div className="flex justify-center items-center w-10 h-10 bg-secondary rounded-full">
                    <h1 className=" text-putih text-xl font-bold">2</h1>
                  </div>
                </div>
                <div className="relative h-44 md:h-24 w-1/2 border-r border-secondary"></div>
              </div>
              <div>
                <h1 className="font-semibold">Benefits of Comfortable Shoes</h1>
                <p>
                  Help With Alignment. Most of Good Feet's comfort soes have plenty of arch support,
                  which helps the body with alignment.
                </p>
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="">
                <div className="p-2 border border-secondary rounded-full">
                  <div className="flex justify-center items-center w-10 h-10 bg-secondary rounded-full">
                    <h1 className="text-putih text-xl font-bold">3</h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-semibold">Benefits of Comfortable Shoes</h1>
                <p>
                  The shoes that you wear regularly can reveal personal characteristics
                  about yourself as well as what you do on a daily basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
