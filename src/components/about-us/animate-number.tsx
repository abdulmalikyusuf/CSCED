import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { formatNumber } from "@/lib/utils";

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
  const count = { value: config.from },
    endValue = config.to;

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top 50%",
        onEnter: () => {
          gsap.to(count, {
            value: endValue,
            duration: config.duration || 2,
            roundProps: "value",
            ease: "power1.in",
            onUpdate: function () {
              if (!el.current) return;
              el.current.innerHTML = formatNumber(count.value) + `${config.suffix ?? ""}`;
            },
          });
        },
      });
    },
    { scope: el.current! }
  );
  return <span ref={el}>{config.from}</span>;
}

export default AnimateNumber;
