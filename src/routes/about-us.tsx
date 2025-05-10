import { asText } from '@prismicio/client'

import { LucideIcons } from "@/components/icons";
import AnimateNumber from "@/components/about-us/animate-number";
import Testimonials from "@/components/testimonials";
import { Articles } from "@/components/articles";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { client } from "@/lib/prismic";
import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react";
import { AboutUsDocumentDataGoalItem, AboutUsDocumentDataImpactItem, AboutUsDocumentDataSectionItem } from "#/types.generated";
import { Simplify } from "@/types";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about-us',
  component: AboutUs,
  loader: async () => {
    const aboutUspage = (await client.getByType("about_us")).results.at(0)?.data
    if (!aboutUspage) {
      throw new Error("About Us page not found")
    }
    return aboutUspage
  }
})


function AboutUs() {
  const about = aboutRoute.useLoaderData()
  return (
    <div className="bg-transparent">
      <div className="relative h-[70vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-0">
          <PrismicImage field={about?.hero_image1} className="size-full object-cover" />
        </div>
        <div className="relative">
          <div className="text-2xl md:text-4xl font-bold text-center text-primary text-stroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-transparent capitalize">
            <PrismicText field={about?.title} />
          </div>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="">ABOUT US</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 py-16 bg-white text-black">
        <div className="md:columns-2 lg:gap-16 px-4 sm:px-8 lg:px-16">
          <div className="text-lg md:text-3xl font-semibold font-amatic text-primary uppercase md:mb-2">
            <PrismicText field={about?.title} />
          </div>
          <div className="text-3xl md:text-5xl font-bold capitalize">
            <PrismicText field={about?.subtitle} />
          </div>
          <div className="mt-2 md:mt-6 leading-relaxed text-justify opacity-80 flex flex-col gap-4">
            <PrismicRichText field={about?.text} />
          </div>
        </div>
        <div className="">
          <div className="bg-[url(assets/images/clean-gray-paper.png)] pt-8 md:pt-10 pb-16 md:pb-28 px-4 sm:px-8 lg:px-16">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-medium text-primary font-amatic md:mb-2">
                <PrismicText field={about?.goal_heading} />
              </div>
              <div className="text-3xl md:text-5xl font-bold">
                <PrismicText field={about?.goal_subheading} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-6 md:mt-10">
              {about?.goal.map((goal: Simplify<AboutUsDocumentDataGoalItem>) => (
                <div
                  key={goal.goal_title[0]?.text}
                  className="flex-1 flex flex-col items-center gap-10 px-6 md:px-4 py-6 rounded-lg max-w-xs max-md:mx-auto hover:bg-white hover:shadow-md"
                >
                  <PrismicImage field={goal.goal_icon} className="size-[100px]" />
                  <div className="text-center">
                    <div className="text-xl leading-none font-bold">
                      <PrismicText field={goal.goal_title} />
                    </div>
                    <div className="mt-2 text-justify leading-relaxed">
                      <PrismicText field={goal.goal_text} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-4 sm:mx-8 lg:mx-16 md:-translate-y-1/2 max-md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-between items-center py-8 md:py-14 px-10 md:px-20 rounded-2xl bg-black text-white">
            {about?.impact.map((stat: Simplify<AboutUsDocumentDataImpactItem>) => (
              <div key={stat.impact_value} className="flex items-center gap-1 w-min">
                <h2 className="text-4xl leading-none font-NunitoSans text-primary font-bold">
                  <AnimateNumber
                    from={0}
                    to={parseInt(stat.impact_value?.toString() ?? "0")}
                    suffix={asText(stat.impact_suffix)}
                  />
                </h2>
                <div className="leading-none uppercase font-semibold">
                  <PrismicText field={stat.impact_text} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {about.section.map((section: Simplify<AboutUsDocumentDataSectionItem>) => (
          <div key={section.title1[0]?.text} className="px-4 sm:px-8 lg:px-16 flex flex-col-reverse md:flex-row gap-8 md:gap-14">
            <div className="flex-1">
              <PrismicImage field={section.section_image} alt="" className="" />
            </div>
            <div className="flex-1">
              <div className="">
                <div className="text-lg md:text-2xl font-medium font-amatic text-primary uppercase md:mb-2">
                  <PrismicText field={section.title1} />
                </div>
                <div className="text-3xl md:text-5xl font-bold capitalize font-DMSans">
                  <PrismicText field={section.section_subtitle} />
                </div>
              </div>
              <div className="mt-4 md:mt-8 md:text-lg">
                <PrismicRichText field={section.section_text} />
              </div>
            </div>
          </div>
        ))}

        {about?.testimonial &&
          <Testimonials testimonials={about?.testimonial} title={about?.testimonial_title} subtitle={about?.testimonial_subtitle} text={about?.testimonial_text} />
        }

        <div className="px-4 sm:px-8 lg:px-16">
          <div className="text-center">
            <div className="md:text-xl font-medium text-primary font-amatic uppercase">
              <PrismicText field={about?.news_heading} />
            </div>
            <div className="md:mt-2 text-3xl md:text-5xl font-bold font-DMSans capitalize">
              <PrismicText field={about?.news_title} />
            </div>
          </div>
          <div className="mt-10">
            <Articles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
