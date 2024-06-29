import React, { useState } from "react";

function MissionAndVision() {
  const [tab, setTab] = useState<"vision" | "mission">("mission");
  return (
    <div className="min-h-full">
      <div className="flex gap-6 ml-1">
        {["mission", "vision"].map((btn: "mission" | "vision") => (
          <button
            key={btn}
            type="button"
            onClick={() => setTab(btn)}
            className={`px-8 py-4 rounded-t-lg text-2xl font-semibold font-space-grotesk uppercase
              ${tab === btn && "bg-[#f8c792] text-white"} ${
              tab !== btn &&
              "text-[#f8c792] border-2 border-b-0 border-[#f8c792]"
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
      <div className="bg-[#111] p-10 md:p-14 lg:p-20">
        <p className="text-lg font-medium leading-loose text-pretty">
          To build the Resilience of vulnerable populations using locally
          available Solutions that ensure Participation and bring meaningful
          development. Leaving no one behind.
        </p>
        <div className="flex gap-2 mt-6">
          <div className="">
            <h6 className="text-2xl font-bold">25%</h6>
            <p className="text-sm font-medium uppercase font-space-grotesk">
              kids needs help
            </p>
          </div>
          <div className="">
            <h6 className="text-2xl font-bold">75k+</h6>
            <p className="text-sm font-medium uppercase font-space-grotesk">
              volunteers
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-10 px-8 py-4 bg-[#f8c792] text-white rounded-full text-sm uppercase font-medium"
        >
          learn more
        </button>
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
      <div className="bg-[#111] p-10 md:p-14 lg:p-20">
        <p className="text-lg font-medium leading-loose text-pretty">
          We envision a Sustainable future where everyone can access
          development, leaving no one behind.
        </p>

        <button
          type="button"
          className="mt-10 px-8 py-4 bg-white text-[#111111] rounded-full text-sm uppercase font-medium"
        >
          donate now
        </button>
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
