import React from "react";

function MissionAndVision() {
  return (
    <div className="min-h-full">
      <div className="flex gap-6 ml-1">
        <button
          type="button"
          className="px-8 py-4 rounded-t-lg bg-[#040066] text-white text-2xl font-semibold font-space-grotesk uppercase"
        >
          mission
        </button>
        <button
          type="button"
          className="px-8 py-4 rounded-t-lg  text-[#040066] border-2 border-b-0 border-[#040066] text-2xl font-semibold font-space-grotesk uppercase"
        >
          vision
        </button>
      </div>
      <div className="flex flex-wrap *:w-full md:*:w-1/2">
        <div className="bg-[#040066] p-10 md:p-14 lg:p-20">
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
            className="mt-10 px-8 py-4 bg-[#01592E] text-white rounded-full text-sm uppercase font-medium"
          >
            learn more
          </button>
        </div>
        <div className="bg-[url(src/assets/images/Group-940-1-1.png)] min-h-96 relative">
          <img
            src="src/assets/images/home-1_03.png"
            alt=""
            className="absolute bottom-0"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              className="size-[100px] rounded-full bg-[#01592E] flex justify-center items-center"
            >
              <span className="block w-4 h-5 bg-white [clip-path:_polygon(0%_0%,_100%_50%,_0%_100%)]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
