import HeroImage from "../public/images/hero-img.png";
import Logo from "../public/images/logo.svg";

// background: url(05D02701-E81D-4F22-9144-691BA2D873C8.jp

{
  /* <div
style={{
  backgroundImage: `url(${HeroImage.src})`,
  backgroundSize: "fit",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}}
className="w-full relative"
> */
}

const Hero = () => {
  return (
    <div className="bg-[#A1B8A7] pb-5">
      <img
        src={HeroImage.src}
        alt="Totebags de métrica sostenidas por una mano"
      />
      {/* <img
        src={Logo.src}
        alt="metrica"
        className="absolute w-44 right-8 top-8"
      /> */}
      <div className="flex gap-2 items-center justify-center h-full mt-5 px-2">
        <div className="bg-[#ffffff]/60 shadow-3xl w-1/2 px-4 py-16 text-center flex items-center justify-center rounded-3xl">
          <h3 className="font-bold text-xl">PRODUCTOS</h3>
        </div>
        <div className="bg-[#ffffff]/60 shadow-3xl w-1/2 px-4 py-16 text-center flex items-center justify-center rounded-3xl">
          <h3 className="font-bold text-xl">PRODUCTOS</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
