import React from "react";
import { LucideIcons } from "@/components/icons";

function Footer() {
  return (
    <footer className="text-white p-8 pt-32">
      <div className="flex flex-wrap *:flex-1 *:min-w-52 gap-8 pb-24">
        <div className="">
          <h6 className="text-lg font-medium">PARTNERS</h6>
          <ul className="mt-8 flex flex-col gap-2.5 opacity-70">
            {[
              "Save the Children",
              "Nigeria Humanitarian Fund Donate in Honor",
              "E.Her",
              "ZOE",
              "State Primary Health Care",
            ].map((partner) => (
              <li key={partner} className="text-wrap">
                {partner}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p className="">
            We envision a Sustainable future where everyone can access
            development, leaving no one behind.
          </p>
          <button
            type="button"
            className="mt-8 uppercase font-medium rounded-full px-8 py-4 border-2"
          >
            Donate Now
          </button>
        </div>
        <div className="">
          <h6 className="text-lg font-medium">CONTACT</h6>
          <ul className="mt-8 flex flex-col gap-5 opacity-70">
            <li className="flex items-center gap-4">
              <span className="">
                <LucideIcons.mapPin size={24} />
              </span>
              <span className="">92 Bowery St., NY 10013</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="">
                <LucideIcons.telephone size={24} />
              </span>
              <span className="">+234 904 5667 455</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="">
                <LucideIcons.mail size={24} />
              </span>
              <span className="">example@mail.com</span>
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="text-lg font-medium">NONPROFITS</h6>
          <ul className="mt-8 flex flex-col gap-2.5 opacity-70">
            {[
              "Nonprofit Resources",
              "Corporate Giving Resources",
              "Corporate Gift Cards",
              "CSR Made Simple",
              "Start an Application",
            ].map((partner) => (
              <li key={partner} className="text-wrap">
                {partner}
              </li>
            ))}
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
            Copyright © {new Date().getFullYear()} FRAD Foundations by
            NaijaCreatives. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
