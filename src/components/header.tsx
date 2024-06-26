import { useState } from "react";

import { LucideIcons } from "@/components/icons";
import MenuButton from "./menu-button";
import { useMediaQuery } from "@/hooks/use-media-query";
import Nav from "./nav";

function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(false);

  return (
    <header className="stickytop-0 z-10 bg-white text-[#111]">
      <div className="flex justify-between items-center h-14 md:h-20 px-4 md:px-8">
        <div className="">
          <img src="src/assets/images/WB.png" alt="" className="h-10 md:h-14" />
        </div>

        <nav
          className={`group/header max-md:fixed inset-y-0 right-0 max-md:py-14 max-md:z-[1] max-md:bg-[#111] transition-[width] duration-300 delay-100 ${
            open ? "max-md:w-3/4" : "max-md:w-0"
          }`}
        >
          <Nav />
        </nav>
        <MenuButton isOpen={open} setIsOpen={setOpen} />
        <button type="button" className="hidden md:inline-block size-10">
          <LucideIcons.search />
        </button>
      </div>
    </header>
  );
}

export default Header;
