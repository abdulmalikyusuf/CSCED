import { GroupField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Image1 from "@/assets/gallery/IMG-20241116-WA0008.jpg";
import Image2 from "@/assets/images/home-1_01-2.png";
import { HomepageDocumentDataAboutUsItem, Simplify } from "#/types.generated";
import { Link } from "react-router-dom";

function AboutUs({
  data,
}: {
  data: GroupField<Simplify<HomepageDocumentDataAboutUsItem>>;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 text-black pr-4 sm:pr-8 lg:pr-16 h-full">
      <div className="shrink-0 relative lg:max-w-[50%]">
        <img
          src={Image1}
          alt=""
          className="max-h-[690px] md:max-h-dvh w-full"
        />
        <div className="absolute bottom-0">
          <div className="relative">
            <img src={Image2} alt="" className="size-[70%]" />
            <div className="absolute left-14 md:left-1/5 bottom-[15%] text-white font-amatic">
              <p className="text-xl md:text-3xl leading-none font-medium md:font-bold md:mb-2">
                Empowering Lives:
              </p>
              <p className="text-lg md:text-3xl leading-none font-medium md:font-bold">
                {" "}
                1000+ Women &amp; Families Served
              </p>
              <a
                href=""
                className=" block uppercase underline underline-offset-4 md:underline-offset-2 text-xs md:text-base md:font-medium mt-1 md:mt-2"
              >
                become a volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-0 lg:max-w-[50%]">
        <h5 className="md:text-xl font-semibold uppercase font-amatic text-primary md:mb-2">
          about us
        </h5>
        <h4 className="text-3xl md:text-5xl font-bold capitalize">
          {data[0].title[0].text}
        </h4>
        <div className="mt-2 md:mt-6 leading-relaxed opacity-80 text-justify">
          <PrismicRichText field={data[0].text} />
        </div>
        <Link
          to="/about-us"
          className="block w-fit mt-6 md:mt-10 text-white uppercase font-medium text-sm rounded-full px-4 md:px-8 py-2 md:py-4 border-2 border-primary bg-primary"
        >
          read more
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
