import { createRoute } from "@tanstack/react-router";
import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react";

import { LucideIcons } from "@/components/icons";
import { formatPhoneNumber } from "@/lib/utils";
import { rootRoute } from "./root";
import { client } from "@/lib/prismic";

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us',
  component: ContactUs,
  loader: async () => {
    const contactUspage = (await client.getByType("contact_us_page")).results.at(0)?.data
    if (!contactUspage) {
      throw new Error("ContactUs page not found")
    }
    return contactUspage
  }
})

function ContactUs() {
  const data = contactRoute.useLoaderData()
  return (
    <>
      <div className="relative h-[70vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-0">
          <PrismicImage field={data.contact_hero_image} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center text-stroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-black">
            <PrismicText field={data.contact_hero_text} />
          </h2>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="uppercase">Contact Us</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14 py-10 md:py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex-shrink-0 md:w-3/5">
          <PrismicImage field={data.contact_image} className="h-full w-full" />
        </div>
        <div className="px-4 sm:px-8 lg:px-0 text-black">
          <h5 className="md:text-xl font-semibold uppercase md:mb-2 font-amatic text-primary">
            <PrismicText field={data.contact_heading} />
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            <PrismicRichText field={data.contact_title} />
          </h4>
          <div className="mt-2 md:mt-4 leading-relaxed opacity-80 text-justify">
            <PrismicRichText field={data.contact_text} />
          </div>
          <div className="flex flex-col gap-4 mt-4 md:mt-6">
            <div className="flex gap-6 items-center">
              <div className="shrink-0 size-16 rounded-full shadow-lg shadow-primary inline-flex justify-center items-center">
                <LucideIcons.mapPin size={20} className="stroke-primary" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold font-amatic text-primary">
                  Visit
                </h5>
                <div className="mt-0.5 leading-none text-sm font-DMSans font-medium text-black">
                  <PrismicText field={data.address} />
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="shrink-0 size-16 rounded-full shadow-lg shadow-primary inline-flex justify-center items-center">
                <LucideIcons.mail size={20} className="stroke-primary" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold font-amatic text-primary">
                  E-Mail Us
                </h5>
                <div className="mt-0.5 leading-none text-sm font-DMSans font-medium text-black">
                  <PrismicText field={data.email} />
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="shrink-0 size-16 rounded-full shadow-lg shadow-primary inline-flex justify-center items-center">
                <LucideIcons.telephone size={20} className="stroke-primary" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold font-amatic text-primary">
                  Call
                </h5>
                <div className="mt-0.5 leading-none text-sm font-DMSans font-medium text-black">
                  {formatPhoneNumber(data.phone_number[0]?.text!)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-16">
        <div className="max-w-5xl w-full mx-auto py-10 px-4 md:py-16 text-black rounded-xl shadow-2xl">
          <h4 className="text-xl md:text-3xl font-bold font-DMSans text-center text-primary">
            Drop Us a Message, Let Us Know What You Think
          </h4>
          <form
            action=""
            className="pt-10 px-4 md:pt-14 md:px-32 grid md:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-8 md:gap-x-14 font-amatic"
          >
            <div className="">
              <label
                htmlFor="first-name"
                className="font-NunitoSans font-medium md:font-semibold text-sm md:text-base"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                className="font-QuickSand mt-2 border-b border-black w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              />
            </div>
            <div className="">
              <label
                htmlFor="last-name"
                className="font-NunitoSans font-medium md:font-semibold text-sm md:text-base"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                className="font-QuickSand mt-2 border-b border-black w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="font-NunitoSans font-medium md:font-semibold text-sm md:text-base"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="font-QuickSand mt-2 border-b border-black w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="font-NunitoSans font-medium md:font-semibold text-sm md:text-base"
              >
                Message...
              </label>
              <textarea
                rows={5}
                id="message"
                placeholder="Message..."
                className="font-QuickSand mt-2 border-b border-black w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-fit py-3 px-10 tracking-[2px] font-bold bg-primary text-white rounded-xl font-DMSans"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}