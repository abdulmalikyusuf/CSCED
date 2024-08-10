import { useState } from "react";

import Nav from "@/components/nav";
import MenuButton from "@/components/menu-button";
import DonateNowBtn from "./donate-now-btn";

function Header() {
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-black flow-root">
      <div className="flex justify-between items-center h-10 md:h-14 px-4 md:px-8 my-1 md:my-2">
        <div className="">
          <img
            src="/logo-with-text_horizontal.png"
            alt=""
            className="h-6 md:h-8"
          />
        </div>

        <Nav isOpen={open} setIsOpen={setOpen} />
        <MenuButton isOpen={open} setIsOpen={setOpen} />
        <DonateNowBtn />
      </div>
    </header>
  );
}

export default Header;
