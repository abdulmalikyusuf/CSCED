import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const subTitle = useRef<HTMLHeadingElement | null>(null);

  const animationDefaults = {
    duration: 0.5,
    ease: "power3.in",
  };
  const animateChars = () => {
    if (subTitle.current === null) return;
    gsap
      .timeline({ defaults: animationDefaults })
      .set(".char", { willChange: "transform, opacity, color", x: 10 }) // Prepare for animation
      .to(".char", {
        stagger: 0.05,
        scale: 1.45,
        color: getComputedStyle(subTitle.current).getPropertyValue(
          "--color-highlight-end"
        ),
      })
      .to(
        ".char",
        {
          duration: 0.4,
          ease: "sine",
          stagger: 0.05,
          scale: 1,
          color: getComputedStyle(subTitle.current).getPropertyValue(
            "--color-highlight-end-alt"
          ),
        },
        animationDefaults.duration
      );
  };

  const resetChars = () => {
    gsap.killTweensOf(".char");
    // Reset character properties for a potential re-run of the animation
    gsap.set(".char", {
      scale: 1,
      color: "", // Reset color if needed or set to initial color
    });
  };

  useGSAP(
    () => {
      if (container.current === null) return;

      //   subTitle.current.dataset.splitting = "";
      Splitting();

      ScrollTrigger.create({
        trigger: subTitle.current,
        start: "top bottom",
        onEnter: () => animateChars(),
        onEnterBack: () => animateChars(),
        // Reset the character's state when scrolling back past the element
        onLeave: () => resetChars(),
        onLeaveBack: () => resetChars(),
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)
  return (
    <div
      ref={container}
      className="bg-[url(assets/images/neom-wbOKjgQv3nY-unsplash.jpg)] bg-no-repeat bg-cover h-screen max-h-[900px] flow-root"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center">
        <h6 className="text-2xl uppercase mb-12" ref={title}>
          resilience for all
        </h6>
        <h2
          className="text-6xl font-bold capitalize tracking-wider font-space-grotesk [--color-highlight-end:_#49af42] [--color-highlight-end-alt:_#4252af]"
          data-splitting="chars"
          ref={subTitle}
        >
          there is no big thing than your concern
        </h2>
        <button
          type="button"
          className="mt-8 px-8 py-4 bg-black text-white rounded-full text-sm uppercase font-medium"
        >
          learn more
        </button>
      </div>
    </div>
  );
}

export default Hero;
