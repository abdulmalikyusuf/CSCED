import { LucideIcons } from "@/components/icons";
import Image1 from "@/assets/images/feature-2.jpg";
import Image2 from "@/assets/images/feature-1.jpg";
import Image3 from "@/assets/images/feature-3.jpg";

function OurMission() {
  return (
    <>
      <div className="relative h-[70vh] bg-[url(assets/images/feature-3.jpg)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary text-stroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-black">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 2xl:grid-cols-[repeat(auto-fill,_minmax(420px,_1fr))] 2xl:gap-10 items-stretch mt-6 md:mt-10">
          {[
            Image1,
            Image2,
            Image3,
            Image1,
            Image2,
            Image3,
            Image1,
            Image2,
            Image3,
            Image1,
            Image2,
            Image3,
          ].map((img, i) => (
            <div key={i} className="h-full">
              <img src={img} alt="" className="h-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full md:h-screen md:max-h-[900px]">
        <div className="md:w-3/5 flex-1 basis-3/5 grayscale">
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
