import { useRef, Fragment } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { closestEdge } from "@/lib/utils";
// import "./nav.css";

function Nav() {
  const container = useRef<HTMLUListElement | null>(null);
  const navItems = [
    {
      title: "Home",
      children:
        "Mia Terra, Quest Hill, Bean Palace, Treehouse, Mia Terra, Quest Hill, Bean Palace, Treehouse"
          .split(", ")
          .map((child) => {
            return { text: child, bgImage: "bg-[url(assets/img/2.jpg)]" };
          }),
    },
    {
      title: "About Us",
      children:
        "Tia Alta, Quadratic Bliss, Host Mall, Freefall Dome, Tia Alta, Quadratic Bliss, Host Mall, Freefall Dome"
          .split(", ")
          .map((child) => {
            return { text: child, bgImage: "bg-[url(assets/img/4.jpg)]" };
          }),
    },
    {
      title: "The Team",
      children:
        "Dome House, Revellion High, Wax Palace, Cellar Tree, Dome House, Revellion High, Wax Palace, Cellar Tree"
          .split(", ")
          .map((child) => {
            return { text: child, bgImage: "bg-[url(assets/img/3.jpg)]" };
          }),
    },
    {
      title: "Guayaquil",
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
  return (
    <ul className="relative md:flex md:gap-6 bg-[#f8c792] md:bg-white [--color-link-hover:#000] [--marquee-text:#fff] [--menu-focus:#775e41] text-[#111]">
      {navItems.map((item) => (
        <NavItem key={item.title} {...item} containerRef={container} />
      ))}
    </ul>
  );
}

export default Nav;

type NavItemProps = {
  containerRef: React.MutableRefObject<HTMLUListElement | null>;
  title: string;
  children: { text: string; bgImage: string }[];
};
function NavItem({ containerRef, title, children }: NavItemProps) {
  const animationDefaults = { duration: 0.6, ease: "expo" };

  const menuItem = useRef<HTMLLIElement | null>(null);
  const DOMLink = useRef<HTMLAnchorElement | null>(null);
  const marquee = useRef<HTMLDivElement | null>(null);
  const marqueeInner = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

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
      .to([marquee.current, marqueeInner.current], { y: "0%" }, 0);
  };
  const mouseLeave = (ev) => {
    // find closest side to the mouse
    const edge = findClosestEdge(ev);

    gsap
      .timeline({ defaults: animationDefaults })
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
      className="menu__item relative overflow-hidden text-center [&>:not(:last-child)]:shadow-[0_-1px_#a7927b] md:[&>:not(:last-child)]:shadow-none last:shadow-[0_1px_#a7927b,_0_-1px_#a7927b] md:!shadow-none"
      ref={menuItem}
    >
      <a
        className="menu__item-link block md:inline-flex relative cursor-pointer focus:text-[var(--menu-focus) focus-visible:text-[var(--menu-focus)] [&>:focus:not(:focus-visible)]:text-[#000] whitespace-nowrap text-[6vw] md:text-sm font-semibold md:font-medium pt-[1vh] px-[1vw] md:p-0 uppercase md:capitalize"
        href="#"
        ref={DOMLink}
        onMouseEnter={contextSafe(mouseEnter)}
        onMouseLeave={contextSafe(mouseLeave)}
      >
        {title}
      </a>
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
