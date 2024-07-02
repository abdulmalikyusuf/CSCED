import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  from: number;
  to: number;
  duration?: number;
  suffix: string;
};

function AnimateNumber(config: Props) {
  const el = useRef<HTMLSpanElement | null>(null);

  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const animateToNumber = () =>
    gsap.fromTo(
      el.current,
      {
        innerHTML: config.from || 0,
        // stagger: {
        //   each: 1.0,
        //   onUpdate: function () {
        //     this.targets().innerHTML = numberWithCommas(
        //       Math.ceil(this.targets().textContent)
        //     );
        //   },
        // },
      },
      {
        innerHTML: config.to,
        duration: config.duration || 1,
        delay: 2,
        ease: "power1.in",
        snap: { innerHTML: 1 },
      }
    );
  const reverseAnimation = () =>
    gsap.fromTo(
      el.current,
      { innerHTML: config.to },
      {
        innerHTML: config.from || 0,
        duration: config.duration || 1,
        delay: 2,
        ease: "power4.in",
        snap: { innerHTML: 1 },
        // onUpdate: () => (this.targets().innerHTML += config.suffix),
      }
    );
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top 70%",
        onEnter: () => animateToNumber(),
        onEnterBack: () => animateToNumber(),
        onLeave: () => reverseAnimation(),
        onLeaveBack: () => reverseAnimation(),
      });
    },
    { scope: el.current }
  );
  return <span ref={el} />;
}

export default AnimateNumber;
