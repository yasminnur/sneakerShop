import Beranda from "../components/beranda";
import Discovery from "../components/discovery";
// import Sponsor from "../components/sponsor";

export default function full() {
  return (
    <>
      <section className="pt-16 bg-primary pb-16">
        <Beranda />
        {/* <Sponsor /> */}
      </section>

      <section className="pt-16 pb-16">
        <Discovery />
      </section>
    </>
  );
}
