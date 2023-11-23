// import Sponsor from "../components/sponsor";

export default function Beranda() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap px-14">
          <div className="w-full md:w-1/2">
            <h1 className="uppercase text-abu font-bold text-3xl lg:text-4xl">
              <span className="text-secondary">Shoes </span>that takes you to
              the next level
            </h1>
            <p className="text-abu text-sm mt-3 leading-5 lg:text-xl">
              Shoes Pure Boost. As the most comfortable shoes in nthe world for
              2020, you really cannot go wrong when you put the Adidas Pur Boost
              on your feet.
            </p>
            <button className="bg-secondary px-5 py-3 mt-5 rounded-xl text-primary font font-semibold lg:text-lg">
              Shop now
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-16 md:mt-0">
            <div className="flex justify-center">
              <div className="relative">
                <div className="p-10 lg:p-12 border border-secondary rounded-full">
                  <div className="bg-red-200 w-40 h-40 lg:w-60 lg:h-60 rounded-full"></div>
                </div>
                <div id="sepatu" name="sepatu" className="absolute top-10 right-7 lg:right-10">
                  <img src="./assets/sepatuUtama.png" alt="" />
                </div>
                <div className="absolute p-3 lg:p-5 rounded-full shadow-xl top-24 -left-5 lg:-left-7 bg-primary">
                  <img src="./assets/flashdisk.png" alt="" className="w-6" />
                </div>
                <div className="absolute p-3 lg:p-5 rounded-full shadow-xl top-0 lg:-top-5 left-8 lg:left-14 bg-primary">
                  <img src="./assets/flash.png" alt="" className="w-6" />
                </div>
                <div className="absolute p-3 lg:p-5 rounded-full shadow-xl -top-1 right-8 bg-primary">
                  <img src="./assets/lightbulb.png" alt="" className="w-7" />
                </div>
                <div className="absolute p-3 lg:p-5 rounded-full shadow-xl top-24 lg:top-28 -right-5 lg:-right-8 bg-primary">
                  <img src="./assets/battery.png" alt="" className="w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-10">
          <Sponsor />
          </div> */}

        </div>
      </div>

    </>
  );
}
