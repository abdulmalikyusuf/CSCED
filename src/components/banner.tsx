import React from "react";
import { LucideIcons } from "./icons";

function Banner() {
  const today = new Date();
  return (
    <div className="hidden py-1 px-4 lg:flex items-center justify-between bg-black">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <h4 className="text-lg text-primary font-bold">{today.getDate()}</h4>
          <div className="inline-flex flex-col text-[10px] leading-[10px] font-medium">
            <p className="uppercase">
              {today.toLocaleString("default", { month: "short" })}
            </p>
            <p className="">{today.getFullYear()}</p>
          </div>
        </div>
        <div className="">
          <h5 className="text-sm font-medium font-NunitoSans">
            END Violence against Women and Girls
          </h5>
        </div>
      </div>
      <ul className="flex items-center text-[10px] 2xl:text-xs divide-x divide-white [&>*]:px-6">
        <li className="flex items-center gap-2">
          <span className="">
            <LucideIcons.mapPin size={12} className="stroke-primary" />
          </span>
          <span className="">No. 4 Hospital Rd, Jimeta-Yola, Adamawa</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="">
            <LucideIcons.telephone size={12} className="stroke-primary" />
          </span>
          <span className="">+234 904 5667 455</span>
        </li>
        <li className="flex items-center gap-2">
          <a href="#">
            <LucideIcons.twitter size={12} className="stroke-primary" />
          </a>
          <a href="#">
            <LucideIcons.facebook size={12} className="stroke-primary" />
          </a>
          <a href="#">
            <LucideIcons.instagram size={12} className="stroke-primary" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Banner;
