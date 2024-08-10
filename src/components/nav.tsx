import { useRef, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { closestEdge } from "@/lib/utils";

const navItems = [
  {
    title: "Home",
    href: "/",
    children:
      "Mia Terra, Quest Hill, Bean Palace, Treehouse, Mia Terra, Quest Hill, Bean Palace, Treehouse"
        .split(", ")
        .map((child) => {
          return { text: child, bgImage: "bg-[url(assets/img/2.jpg)]" };
        }),
  },
  {
    title: "About Us",
    href: "/about-us",
    children:
      "Tia Alta, Quadratic Bliss, Host Mall, Freefall Dome, Tia Alta, Quadratic Bliss, Host Mall, Freefall Dome"
        .split(", ")
        .map((child) => {
          return { text: child, bgImage: "bg-[url(assets/img/4.jpg)]" };
        }),
  },
  {
    title: "The Team",
    href: "/the-team",
    children:
      "Dome House, Revellion High, Wax Palace, Cellar Tree, Dome House, Revellion High, Wax Palace, Cellar Tree"
        .split(", ")
        .map((child) => {
          return { text: child, bgImage: "bg-[url(assets/img/3.jpg)]" };
        }),
  },
  {
    title: "The Mission",
    href: "/our-mission",
    children:
      "Dome House, Revellion High, Wax Palace, Cellar Tree, Dome House, Revellion High, Wax Palace, Cellar Tree"
        .split(", ")
        .map((child) => {
          return { text: child, bgImage: "bg-[url(assets/img/3.jpg)]" };
        }),
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    children:
      "Frank Tower, Dom Dom, Santa Maria, Big Molly, Frank Tower, Dom Dom, Santa Maria, Big Molly"
        .split(", ")
        .map((child) => {
          return {
            text: child,
            bgImage: "bg-[url(assets/img/1.jpg)]",
          };
        }),
  },
];
function Nav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const container = useRef<HTMLElement | null>(null);

  return (
    <nav
      className={`group/header max-md:fixed inset-y-0 right-0 max-md:py-14 max-md:z-[1] max-md:bg-black transition-[width] delay-150 duration-300 ease-in-out ${
        isOpen ? "max-md:w-3/4" : "max-md:w-0"
      }`}
      ref={container}
    >
      <ul className="relative md:flex md:gap-6 bg-primary md:bg-white [--color-link-hover:#111] [--marquee-text:#fff] [--menu-focus:#775e41] text-black">
        {navItems.map((item) => (
          <NavItem key={item.title} {...item} handleClick={setIsOpen} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

type NavItemProps = {
  title: string;
  href: string;
  children: { text: string; bgImage: string }[];
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
};
function NavItem({ title, children, href, handleClick }: NavItemProps) {
  const animationDefaults = { duration: 0.6, ease: "expo" };
  const menuItem = useRef<HTMLLIElement | null>(null);
  const DOMLink = useRef<HTMLAnchorElement | null>(null);
  const marquee = useRef<HTMLDivElement | null>(null);
  const marqueeInner = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: menuItem.current });

  const mouseEnter = (ev) => {
    // find closest side to the mouse
    const edge = findClosestEdge(ev);

    // set the initial y position for both the marquee and marqueeInner elements
    // for the reveal effect to happen, both start at opposite positions
    // the directions are different depending on the direction the cursor enters the element (bottom or top)
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marquee.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInner.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .set(DOMLink.current, { opacity: 0 })
      .to([marquee.current, marqueeInner.current], { y: "0%" }, 0);
  };
  const mouseLeave = (ev) => {
    // find closest side to the mouse
    const edge = findClosestEdge(ev);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(DOMLink.current, { opacity: 1 })
      .to(marquee.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInner.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  // find closest side to the mouse when entering/leaving
  const findClosestEdge = (ev) => {
    if (menuItem.current === null) return;
    const x = ev.pageX - menuItem.current.offsetLeft;
    const y = ev.pageY - menuItem.current.offsetTop;
    return closestEdge(
      x,
      y,
      menuItem.current.clientWidth,
      menuItem.current.clientHeight
    );
  };
  return (
    <li
      className="relative overflow-hidden text-center shadow-[0_-1px_#a7927b] last:shadow-[0_1px_#a7927b,_0_-1px_#a7927b] md:shadow-none md:last:shadow-none"
      ref={menuItem}
      onClick={() => handleClick(false)}
    >
      <NavLink
        to={href}
        className="[&.active]:md:text-primary md:hover:text-primary md:!opacity-100 block md:inline-flex relative cursor-pointer max-md:focus:text-[var(--menu-focus)] max-md:focus-visible:text-[var(--menu-focus)] max-md:[&>:focus:not(:focus-visible)]:text-[#000] whitespace-nowrap text-[6vw] md:text-sm font-semibold md:font-medium pt-[1vh] px-[1vw] md:p-0 uppercase md:capitalize"
        ref={DOMLink}
        onMouseEnter={contextSafe(mouseEnter)}
        onMouseLeave={contextSafe(mouseLeave)}
      >
        {title}
      </NavLink>
      <div
        className="marquee md:hidden absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none bg-[#000] -translate3d-y-full"
        ref={marquee}
      >
        <div
          className="marquee__inner-wrap h-full w-full translate3d-y-full"
          ref={marqueeInner}
        >
          <div
            className="marquee__inner h-full w-fit flex items-center relative will-change-transform animate-marquee"
            aria-hidden="true"
          >
            {children.map((child, i) => (
              <Fragment key={`${child.text}-${i}`}>
                <span className="whitespace-nowrap text-[6vw] pt-[1vh] px-[1vw] uppercase text-center text-white font-normal">
                  {child.text}
                </span>
                <div
                  className={`marquee__img w-[15vw] h-[70%] mx-[2vw] rounded-[5vw] bg-cover bg-[50%_50%] ${child.bgImage}`}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
