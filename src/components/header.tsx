import { useState } from "react";

import { LucideIcons } from "@/components/icons";
import Nav from "@/components/nav";
import MenuButton from "@/components/menu-button";
import Logo from "@/assets/images/WB.png";

function Header() {
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(false);

  return (
    <header className="stickytop-0 z-10 bg-white text-[#111]">
      <div className="flex justify-between items-center h-14 md:h-20 px-4 md:px-8">
        <div className="">
          <img src={Logo} alt="" className="h-10 md:h-14" />
        </div>

        <Nav isOpen={open} setIsOpen={setOpen} />
        <MenuButton isOpen={open} setIsOpen={setOpen} />
        <button type="button" className="hidden md:inline-block size-10">
          <LucideIcons.search />
        </button>
      </div>
    </header>
  );
}

export default Header;
