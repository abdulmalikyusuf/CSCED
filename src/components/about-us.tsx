import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 text-black pr-4 sm:pr-8 lg:pr-16">
      <div className="shrink-0 relative">
        <img src="src/assets/images/Frame-115-1.png" alt="" className="" />
        <div className="absolute bottom-0">
          <div className="relative">
            <img src="src/assets/images/home-1_01-2.png" alt="" className="" />
            <div className="absolute left-[20%] bottom-[15%] text-white font-space-grotesk">
              <p className="text-3xl font-bold mb-2">Empowering Lives:</p>
              <p className="text-3xl font-bold">
                {" "}
                1000+ Women &amp; Families Served
              </p>
              <a
                href=""
                className=" block uppercase underline underline-offset-4 font-medium mt-6"
              >
                become a volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-0">
        <h5 className="text-2xl uppercase mb-2">about us</h5>
        <h4 className="text-5xl font-semibold font-space-grotesk">
          Empowering Lives, Creating Impact
        </h4>
        <p className="mt-6 leading-relaxed opacity-80">
          Future Resilience and Development Foundation (FRAD Foundation) is a
          registered Non-profit organization with the corporate affairs
          commission (CAC) with CAC No CAC/IT/NO/139393 in 2019 in accordance
          with the Nigerian Law with office address at Suit B87, Mohammed Goni,
          Complex, Maiduguri Borno state, Nigeria.
        </p>
        <button
          type="button"
          className="mt-10 text-white uppercase font-medium text-sm rounded-full px-8 py-4 border-2 border-[#232323] bg-[#01592E]"
        >
          read more
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
