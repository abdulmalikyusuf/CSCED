import React from "react";
import { LucideIcons } from "./icons";

function Banner() {
  return (
    <div className="hidden py-1 px-4 lg:flex items-center justify-between bg-black">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <h4 className="text-lg text-primary font-bold">10</h4>
          <div className="inline-flex flex-col text-[10px] leading-[10px] font-medium">
            <p className="">AUG</p>
            <p className="">2024</p>
          </div>
        </div>
        <div className="">
          <h5 className="text-sm font-medium font-Montserrat">
            END Violence against Women and Girls
          </h5>
        </div>
      </div>
      <ul className="flex items-center text-[10px] 2xl:text-xs divide-x divide-white [&>*]:px-6">
        <li className="flex items-center gap-2">
          <span className="">
            <LucideIcons.mapPin size={12} />
          </span>
          <span className="">92 Bowery St., NY 10013</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="">
            <LucideIcons.telephone size={12} />
          </span>
          <span className="">+234 904 5667 455</span>
        </li>
        <li className="flex items-center gap-2">
          <LucideIcons.twitter size={12} />
          <LucideIcons.facebook size={12} />
          <LucideIcons.instagram size={12} />
        </li>
      </ul>
    </div>
  );
}

export default Banner;
