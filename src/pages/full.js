import Beranda from "../components/beranda";
import Discovery from "../components/discovery";
import Shoes from "../components/shoes";
import Benefit from "../components/benefit";
import Mask from "../components/mask";

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

      <section className="pt-16 pb-16">
        <Shoes />
      </section>
      
      <section className="pt-16 pb-16">
        <Benefit />
      </section>

      <section className="pt-16 pb-16">
        <Mask />
      </section>
    </>
  );
}
