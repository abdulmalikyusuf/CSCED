import { LucideIcons } from "@/components/icons";
import Image1 from "@/assets/images/feature-2.jpg";
import ImageWA0023 from "@/assets/gallery/IMG-20241116-WA0023.jpg";
import ImageWA0012 from "@/assets/gallery/IMG-20241116-WA0012.jpg";
import ImageWA0003 from "@/assets/gallery/IMG-20241116-WA0003.jpg";
import ImageWA0005 from "@/assets/gallery/IMG-20241116-WA0005.jpg";
import ImageWA0010 from "@/assets/gallery/IMG-20241116-WA0010.jpg";
import ImageWA0011 from "@/assets/gallery/IMG-20241116-WA0011.jpg";
import ImageWA0015 from "@/assets/gallery/IMG-20241116-WA0015.jpg";
import ImageWA0019 from "@/assets/gallery/IMG-20241116-WA0019.jpg";
import ImageWA0020 from "@/assets/gallery/IMG-20241116-WA0020.jpg";
import ImageWA0024 from "@/assets/gallery/IMG-20241116-WA0024.jpg";
import ImageWA0001 from "@/assets/gallery/IMG-20241116-WA0001.jpg";
import ImageWA0002 from "@/assets/gallery/IMG-20241116-WA0002.jpg";
import ImageWA0004 from "@/assets/gallery/IMG-20241116-WA0004.jpg";
import ImageWA0006 from "@/assets/gallery/IMG-20241116-WA0006.jpg";
import ImageWA0007 from "@/assets/gallery/IMG-20241116-WA0007.jpg";
import ImageWA0008 from "@/assets/gallery/IMG-20241116-WA0008.jpg";
import ImageWA0009 from "@/assets/gallery/IMG-20241116-WA0009.jpg";
import ImageWA0013 from "@/assets/gallery/IMG-20241116-WA0013.jpg";
import ImageWA0014 from "@/assets/gallery/IMG-20241116-WA0014.jpg";
import ImageWA0016 from "@/assets/gallery/IMG-20241116-WA0016.jpg";
import ImageWA0017 from "@/assets/gallery/IMG-20241116-WA0017.jpg";
import ImageWA0018 from "@/assets/gallery/IMG-20241116-WA0018.jpg";
import ImageWA0022 from "@/assets/gallery/IMG-20241116-WA0022.jpg";

function OurMission() {
  return (
    <>
      <div className="relative h-[70vh] bg-[url(assets/images/feature-3.jpg)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary textstroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-black">
            The Mission
          </h2>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm md:text-base font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="uppercase">our mission</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-y-10 gap-x-8 lg:gap-x-10 xl:gap-14 py-16 px-4 sm:px-8 lg:px-16">
        <div className="">
          <img src={Image1} alt="" className="h-full w-full" />
        </div>
        <div className="px-4 sm:px-8 md:px-0 text-black">
          <h5 className="md:text-xl font-semibold uppercase md:mb-2 font-amatic text-primary">
            Help each other
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            Our Mission
          </h4>
          <div className="mt-2 md:mt-4 leading-relaxed opacity-80">
            <p className="text-justify">
              To build the Resilience of vulnerable populations using locally
              available Solutions that ensure Participation and bring meaningful
              development. Leaving no one behind.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-8 lg:px-16 mb-20">
        <div className="text-center text-[#232323]">
          <h6 className="md:text-xl font-semibold font-amatic text-primary uppercase">
            Empowering Lives, Building Futures
          </h6>
          <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            Committed to Social and Economic Development for All
          </h4>
          <p className="mt-4 md:mt-6 md:text-lg font-NunitoSans font-medium">
            Our gallery showcases the heart and soul of our organization in
            action. These images capture the essence of our efforts,
            highlighting the faces and stories of those we serve. Through these
            visuals, we invite you to witness the impact of our mission and join
            us in our journey towards creating a brighter, more equitable
            future.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8 2xl:grid-cols-[repeat(auto-fill,_minmax(420px,_1fr))] 2xl:gap-10 items-stretch mt-6 md:mt-10">
          {[
            ImageWA0023,
            ImageWA0012,
            ImageWA0003,
            ImageWA0005,
            ImageWA0010,
            ImageWA0011,
            ImageWA0015,
            ImageWA0019,
            ImageWA0020,
            ImageWA0024,
            ImageWA0001,
            ImageWA0002,
            ImageWA0004,
            ImageWA0006,
            ImageWA0007,
            ImageWA0008,
            ImageWA0009,
            ImageWA0013,
            ImageWA0014,
            ImageWA0016,
            ImageWA0017,
            ImageWA0018,
            ImageWA0022,
          ].map((img, i) => (
            <div key={i} className="h-full">
              <img src={img} alt="" className="h-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full md:h-screen md:max-h-[900px]">
        <div className="md:w-3/5 flex-1 basis-3/5">
          <img src={Image1} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="flex-1 p-8 lg:p-10 xl:p-14 flex flex-col justify-center bg-primary text-white">
          <h5 className="md:text-xl xl:text-2xl font-semibold uppercase md:mb-2 font-amatic">
            subscribe
          </h5>
          <h4 className="text-3xl md:text-5xl xl:text-6xl font-bold font-DMSans capitalize">
            Listen, Act, Learn. Subscribe to Our Updates.
          </h4>
          <div className="mt-2 md:mt-6 leading-relaxed opacity-80">
            <p className="xl:text-xl xl:font-medium">
              Mattis enim ut tellus elementum sagittis. In egestas erat
              imperdiet sed euismod nisi porta. Ullamcorper malesuada proin
              libero nunc consequat QuickSanddum varius sit amet.
            </p>
          </div>
          <div className="mt-6 md:mt-8 xl:mt-10 flex">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="text-sm xl:text-base xl:font-medium font-amatic w-full sm:w-96 rounded-l-lg text-black px-2"
            />
            <button
              type="submit"
              className="px-6 py-3 text-white bg-black rounded-r-lg capitalize font-medium font-DMSans"
            >
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
