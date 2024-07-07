import { LucideIcons } from "@/components/icons";
import Image1 from "@/assets/images/feature-2.jpg";

function ContactUs() {
  return (
    <>
      <div className="relative h-[70vh] bg-[url(assets/images/feature-3.jpg)] grayscale bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center text-stroke-px text-stroke-[#111] gradient-text bg-gradient-to-br from-primary to-[#111]">
            Reach out to us
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
          <img src={Image1} alt="" className="h-full w-full" />
        </div>
        <div className="px-4 sm:px-8 lg:px-0 text-[#111]">
          <h5 className="md:text-xl font-semibold uppercase md:mb-2 font-space-grotesk text-primary">
            Contact Us
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            get in touch with us
          </h4>
          <div className="mt-2 md:mt-4 leading-relaxed opacity-80">
            <p className="">
              Connect with us to be a part of positive change. Whether you have
              questions, feedback, or want to explore collaboration
              opportunities, the CSCED team is here for you. Your engagement
              fuels our mission to make a meaningful impact in the lives of
              those we serve. Reach out to us today, and let’s create a brighter
              future together.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4 md:mt-6">
            <div className="flex gap-6 items-center">
              <div className="shrink-0 size-16 rounded-full shadow-lg shadow-primary inline-flex justify-center items-center">
                <LucideIcons.mapPin size={20} className="stroke-primary" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold font-space-grotesk text-primary">
                  Visit
                </h5>
                <p className="mt-0.5 leading-none text-sm font-DMSans font-medium text-[#111]">
                  House No. 6, Gama Street, Maiduguri, Borno State.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="shrink-0 size-16 rounded-full shadow-lg shadow-primary inline-flex justify-center items-center">
                <LucideIcons.mail size={20} className="stroke-primary" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold font-space-grotesk text-primary">
                  E-Mail Us
                </h5>
                <p className="mt-0.5 leading-none text-sm font-DMSans font-medium text-[#111]">
                  info@csced.org
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="shrink-0 size-16 rounded-full shadow-lg shadow-primary inline-flex justify-center items-center">
                <LucideIcons.telephone size={20} className="stroke-primary" />
              </div>
              <div className="">
                <h5 className="text-lg font-bold font-space-grotesk text-primary">
                  Call
                </h5>
                <p className="mt-0.5 leading-none text-sm font-DMSans font-medium text-[#111]">
                  +234 901 2345 677
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-16">
        <div className="max-w-5xl w-full mx-auto py-10 px-4 md:py-16 text-[#111] rounded-xl shadow-2xl">
          <h4 className="text-xl md:text-3xl font-bold font-DMSans text-center text-primary">
            Drop Us a Message, Let Us Know What You Think
          </h4>
          <form
            action=""
            className="pt-10 px-4 md:pt-14 md:px-32 grid md:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-8 md:gap-x-14 font-space-grotesk"
          >
            <div className="">
              <label
                htmlFor="first-name"
                className="font-medium md:font-semibold text-sm md:text-base"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                className="mt-2 border-b border-[#111] w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              />
            </div>
            <div className="">
              <label
                htmlFor="last-name"
                className="font-medium md:font-semibold text-sm md:text-base"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                className="mt-2 border-b border-[#111] w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="font-medium md:font-semibold text-sm md:text-base"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="mt-2 border-b border-[#111] w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="font-medium md:font-semibold text-sm md:text-base"
              >
                Message...
              </label>
              <textarea
                rows={5}
                id="message"
                placeholder="Message..."
                className="mt-2 border-b border-[#111] w-full md:mt-4 focus:outline-none focus:border-primary focus:border-b-2"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-fit py-3 px-10 tracking-[2px] font-bold bg-primary text-[#111] rounded-xl font-DMSans"
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

export default ContactUs;
