import { LucideIcons } from "@/components/icons";
import DonateNowBtn from "./donate-now-btn";

function Footer() {
  return (
    <footer className="text-white p-8 pt-20 md:pt-32">
      <div className="flex flex-wrap *:flex-1 *:min-w-52 gap-8 pb-16 md:pb-24">
        <div className="max-w-[420px] md:order-2">
          <p className="text-sm md:text-base">
            We envision a Sustainable future where everyone can access
            development, leaving no one behind.
          </p>
          <div className="mt-4 md:mt-6 ">
            <button
              type="button"
              className="hidden lg:block px-4 md:px-8 py-1 md:py-3 bg-transparent border-2 hover:bg-white hover:text-primary transition-colors duration-300 delay-150 rounded-full text-xs md:text-sm uppercase font-medium"
            >
              donate now
            </button>
          </div>
        </div>
        <div className="md:order-1">
          <h6 className="md:text-lg font-bold">PARTNERS</h6>
          <ul className="mt-4 md:mt-6 flex flex-col gap-2.5 opacity-70">
            {[
              "Adamawa State Gov't",
              "British Council",
              "FAO",
              "MSH",
              "World Bank",
              "UNHCR",
            ].map((partner) => (
              <li key={partner} className="text-wrap text-sm md:text-base">
                {partner}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:order-3">
          <h6 className="md:text-lg font-bold">CONTACT</h6>
          <ul className="mt-4 md:mt-6 flex flex-col gap-5 opacity-70 text-sm md:text-base">
            <li className="flex items-center gap-4">
              <span className="">
                <LucideIcons.mapPin size={24} className="" />
              </span>
              <span className="">No. 4 Hospital Rd, Jimeta-Yola, Adamawa State</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="">
                <LucideIcons.telephone size={24} className="" />
              </span>
              <span className="">+234 803 6231 300</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="">
                <LucideIcons.mail size={24} className="" />
              </span>
              <span className="">info@csced-nigeria.org</span>
            </li>
          </ul>
        </div>
    
      </div>
      <div className="border-t pt-4 md:pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between text-sm md:text-base">
          <div className="flex divide-x-2">
            <p className="pr-4">Terms of use</p>
            <p className="pl-4">Privacy Policy</p>
          </div>
          <p className="">
            Copyright © {new Date().getFullYear()} CSCED by Vuetify Solutions.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
