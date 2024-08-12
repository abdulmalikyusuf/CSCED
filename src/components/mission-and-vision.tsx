import { useState } from "react";
import { Link } from "react-router-dom";
import DonateNowBtn from "./donate-now-btn";
import MissionAndVisionImage from "@/assets/images/istockphoto-1372606308-1024x1024.jpg";

function MissionAndVision() {
  const [tab, setTab] = useState<"vision" | "mission">("mission");
  return (
    <div className="min-h-full">
      <div className="flex gap-2 sm:gap-4 md:gap-6 ml-1">
        {["mission", "vision"].map((btn: "mission" | "vision") => (
          <button
            key={btn}
            type="button"
            onClick={() => setTab(btn)}
            className={`px-4 md:px-8 py-2 md:py-4 rounded-t-md md:rounded-t-lg text-sm md:text-lg leading-none font-medium md:font-semibold font-amatic uppercase
              ${tab === btn && "bg-[#f8c792] text-white"} ${
              tab !== btn &&
              "text-[#f8c792] border-[1.5px] md:border-2 border-b-0 border-[#f8c792]"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
      {tab === "mission" && <Mission />}
      {tab === "vision" && <Vision />}
    </div>
  );
}

export default MissionAndVision;

function Mission() {
  return (
    <div className="flex flex-wrap *:w-full md:*:w-1/2">
      <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-16">
        <p className="md:text-lg font-medium leading-loose text-pretty text-justify">
          To promote access to essential information, knowledge, and skills,
          while empowering the poor and vulnerable to achieve sustainable
          development. We are dedicated to creating opportunities that foster
          self-reliance and resilience, focusing on inclusive programs that
          address critical needs and support community growth. Our mission is to
          bridge gaps and dismantle barriers, ensuring that every individual has
          the resources and support needed to thrive. By fostering a culture of
          empowerment and collaboration, we aim to drive meaningful change and
          contribute to a more equitable and prosperous future for all.
        </p>
        {/* <div className="flex gap-2 mt-6">
          <div className="">
            <h6 className="text-2xl font-bold">25%</h6>
            <p className="text-sm font-medium uppercase font-amatic">
              kids needs help
            </p>
          </div>
          <div className="">
            <h6 className="text-2xl font-bold">75k+</h6>
            <p className="text-sm font-medium uppercase font-amatic">
              volunteers
            </p>
          </div>
        </div> */}
        <Link
          to="/our-mission"
          className="block w-fit mt-10 px-4 md:px-8 py-2 md:py-4 bg-[#f8c792] text-white rounded-full text-sm uppercase font-medium"
        >
          learn more
        </Link>
      </div>
      <div className="bg-[url(assets/images/Group-940-1-1.png)] min-h-96 relative">
        <img
          src={MissionAndVisionImage}
          alt=""
          className="absolutebottom-0 object-cover w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            className="size-12 md:size-20 lg:size-[100px] rounded-full bg-[#f8c792] flex justify-center items-center"
          >
            <span className="block w-2 h-2.5 md:w-4 md:h-5 bg-white [clip-path:_polygon(0%_0%,_100%_50%,_0%_100%)]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div className="flex flex-wrap *:w-full md:*:w-1/2">
      <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-16">
        <p className="md:text-lg font-medium leading-loose text-pretty text-justify">
          To empower communities by facilitating access to comprehensive
          healthcare services, diverse economic development opportunities, and
          quality education. We strive to create an environment where
          individuals are equipped with the knowledge, skills, and resources
          necessary to achieve self-reliance and sustainable growth. Our vision
          is to build inclusive communities where every person has the
          opportunity to contribute meaningfully to society, fostering a culture
          of mutual support, respect, and collaboration. Through our efforts, we
          aim to break the cycle of poverty and inequality, ensuring a brighter
          and more equitable future for all.
        </p>

        <div className="mt-6 md:mt-10">
          <DonateNowBtn />
        </div>
      </div>
      <div className="bg-[url(assets/images/Group-940-1-1.png)] min-h-96 relative">
        <img
          src="src/assets/images/home-1_03.png"
          alt=""
          className="absolute bottom-0"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            className="size-12 md:size-20 lg:size-[100px] rounded-full bg-[#f8c792] flex justify-center items-center"
          >
            <span className="block w-4 h-5 bg-white [clip-path:_polygon(0%_0%,_100%_50%,_0%_100%)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
