import { GroupField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Image1 from "@/assets/images/Frame-115-1.png";
import Image2 from "@/assets/images/home-1_01-2.png";
import { HomepageDocumentDataAboutUsItem, Simplify } from "#/types.generated";

function AboutUs({
  data,
}: {
  data: GroupField<Simplify<HomepageDocumentDataAboutUsItem>>;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 text-black pr-4 sm:pr-8 lg:pr-16">
      <div className="shrink-0 relative">
        <img src={Image1} alt="" className="" />
        <div className="absolute bottom-0">
          <div className="relative">
            <img src={Image2} alt="" className="" />
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
        <h5 className="text-lg md:text-2xl font-semibold uppercase md:mb-2">
          about us
        </h5>
        <h4 className="text-3xl md:text-5xl font-bold font-space-grotesk capitalize">
          {data[0].title[0].text}
        </h4>
        <div className="mt-2 md:mt-6 leading-relaxed opacity-80">
          <PrismicRichText field={data[0].text} />
        </div>
        <button
          type="button"
          className="mt-6 md:mt-10 text-white uppercase font-medium text-sm rounded-full px-8 py-4 border-2 border-[#f8c792] bg-[#f8c792]"
        >
          read more
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
