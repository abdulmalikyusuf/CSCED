import { createRoute } from "@tanstack/react-router";
import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react";

import { LucideIcons } from "@/components/icons";
import Image1 from "@/assets/images/feature-2.jpg";
import { rootRoute } from "./root";
import { client } from "@/lib/prismic";
import { OurMissionPageDocumentDataMissionGalleryImageItem, OurMissionPageDocumentDataMissionSectionItem } from "#/types.generated";
import { Simplify } from "@/types";

export const ourMissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-mission',
  component: OurMission,
  loader: async () => {
    const missionpage = (await client.getByType("our_mission_page")).results.at(0)?.data
    console.log(missionpage)
    if (!missionpage) {
      throw new Error("Mission page not found")
    }
    return missionpage
  }
})

function OurMission() {
  const mission = ourMissionRoute.useLoaderData();

  return (
    <>
      <div className="relative h-[70vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-0">
          <PrismicImage field={mission.mission_hero_image} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary textstroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-black">
            {mission.mission_hero_text[0]?.text}
          </h2>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm md:text-base font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="uppercase">our mission</h6>
          </div>
        </div>
      </div>
      {mission.mission_section.map((section: Simplify<OurMissionPageDocumentDataMissionSectionItem>) => (
        <div key={section.title1[0]?.text} className="flex flex-col md:flex-row items-start gap-y-10 gap-x-8 lg:gap-x-10 xl:gap-14 py-16 px-4 sm:px-8 lg:px-16">
          <div className="">
            <img src={Image1} alt="" className="h-full w-full" />
          </div>
          <div className="px-4 sm:px-8 md:px-0 text-black">
            <h5 className="md:text-xl font-semibold uppercase md:mb-2 font-amatic text-primary">
              {section.title1[0]?.text}
            </h5>
            <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
              <PrismicText field={section.section_subtitle} />
            </h4>
            <div className="mt-2 md:mt-4 leading-relaxed opacity-80 text-justify">
              <PrismicRichText field={section.section_text} />
            </div>
          </div>
        </div>
      ))}

      <div className="py-16 px-4 sm:px-8 lg:px-16 mb-20">
        <div className="text-center text-[#232323]">
          <h6 className="md:text-xl font-semibold font-amatic text-primary uppercase">
            {mission.mission_gallery_heading[0]?.text}
          </h6>
          <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            <PrismicRichText field={mission.mission_gallery_title} />
          </h4>
          <div className="mt-4 md:mt-6 md:text-lg font-NunitoSans font-medium">
            <PrismicRichText field={mission.mision_gallery_subtitle} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8 2xl:grid-cols-[repeat(auto-fill,_minmax(420px,_1fr))] 2xl:gap-10 items-stretch mt-6 md:mt-10">
          {mission.mission_gallery_image.map((galleryImage: Simplify<OurMissionPageDocumentDataMissionGalleryImageItem>) =>
            galleryImage.gallery_image.url && (
              <PrismicImage key={galleryImage.gallery_image.url} field={galleryImage.gallery_image} className="object-cover w-full" />
            )
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full md:h-screen md:max-h-[900px]">
        <div className="md:w-3/5 flex-1 basis-3/5">
          <img src={`${mission.subscription_section_image.url!}&w=720`} alt="" className="object-contain h-full w-full" />
        </div>
        <div className="flex-1 p-8 lg:p-10 xl:p-14 flex flex-col justify-center bg-primary text-white">
          <div className="md:text-xl xl:text-2xl font-semibold uppercase md:mb-2 font-amatic">
            <PrismicText field={mission.subscription_section_heading} />
          </div>
          <div className="text-3xl md:text-5xl xl:text-6xl font-bold font-DMSans capitalize">
            <PrismicRichText field={mission.subscription_section_title} />
          </div>
          <div className="mt-2 md:mt-6 leading-relaxed opacity-80">
            <div className="xl:text-xl xl:font-medium">
              <PrismicRichText field={mission.subscription_section_text} />
            </div>
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