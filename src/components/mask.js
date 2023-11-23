export default function Mask() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap px-14">
          <div className="w-full">
            <h1 className="uppercase text-abu font-bold text-3xl lg:text-4xl">
              by <span className="text-secondary">shoes</span> with matching mask
            </h1>

            {/* CARD */}
                      <div className="flex flex-wrap justify-center mx-auto gap-x-8 lg:gap-x-24">
                          {/* CARD 1 */}
              <div className="relative h-64 w-52 mt-14 lg:mt-20 shadow-2xl">
                <div className="h-56 ">
                  <img
                    src="./assets/ultraboost.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="absolute -top-5 -left-5">
                  <img
                    src="./assets/maskHitam.jpg"
                    alt=""
                    className="rounded-full w-20 h-20 object-cover shadow-2xl"
                  />
                </div>
                <div className="flex justify-center p-2 bg-abu rounded-b-xl group-hover:bg-secondary">
                  <h3 className="text-putih uppercase font-semibold">
                    Ultraboost-22
                  </h3>
                </div>
                <div className="absolute p-2 rounded-lg bg-secondary top-4 right-3">
                  <img src="./assets/love.png" alt="" className="w-3" />
                </div>
                <div className="absolute p-2 rounded-lg bg-abu top-14 right-3">
                  <img src="./assets/plus.png" alt="" className="w-3" />
                </div>
                          </div>
                          
                          {/* CARD 2 */}
                          <div className="relative h-64 w-52 mt-14 lg:mt-20 shadow-2xl">
                <div className="h-56 ">
                  <img
                    src="./assets/D.O.N.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="absolute -top-5 -left-5">
                  <img
                    src="./assets/maskBlue.jpg"
                    alt=""
                    className="rounded-full w-20 h-20 object-cover shadow-2xl"
                  />
                </div>
                <div className="flex justify-center p-2 bg-abu rounded-b-xl group-hover:bg-secondary">
                  <h3 className="text-putih uppercase font-semibold">
                    D.O.N
                  </h3>
                </div>
                <div className="absolute p-2 rounded-lg bg-secondary top-4 right-3">
                  <img src="./assets/love.png" alt="" className="w-3" />
                </div>
                <div className="absolute p-2 rounded-lg bg-abu top-14 right-3">
                  <img src="./assets/plus.png" alt="" className="w-3" />
                </div>
                          </div>
                          {/* CARD 3 */}
                          <div className="relative h-64 w-52 mt-14 lg:mt-20 shadow-2xl">
                <div className="h-56 ">
                  <img
                    src="./assets/terrexTwo.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="absolute -top-5 -left-5">
                  <img
                    src="./assets/maskWhite.jpeg"
                    alt=""
                    className="rounded-full w-20 h-20 object-cover shadow-2xl"
                  />
                </div>
                <div className="flex justify-center p-2 bg-abu rounded-b-xl group-hover:bg-secondary">
                  <h3 className="text-putih uppercase font-semibold">
                    Terrex Two
                  </h3>
                </div>
                <div className="absolute p-2 rounded-lg bg-secondary top-4 right-3">
                  <img src="./assets/love.png" alt="" className="w-3" />
                </div>
                <div className="absolute p-2 rounded-lg bg-abu top-14 right-3">
                  <img src="./assets/plus.png" alt="" className="w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
