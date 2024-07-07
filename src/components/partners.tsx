/* eslint-disable prefer-const */
// @ts-nocheck

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AdamawaSACA from "@/assets/images/partners/adamawa-SACA.jpg";
import BritishCouncil from "@/assets/images/partners/british-council.png";
import FAO from "@/assets/images/partners/fao.jpg";
import NELA from "@/assets/images/partners/nela.jpg";
import NEMA from "@/assets/images/partners/nema.jpg";
import OCHA from "@/assets/images/partners/search-for-common-ground.jpg";
import UNHCR from "@/assets/images/partners/unhcr.png";
import WorldBank from "@/assets/images/partners/world-bank.jpg";

function Partners() {
  const container = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement[]>([]);

  const pushRef = (el: HTMLDivElement | null) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  useGSAP(
    () => {
      let items = gsap.utils.toArray<HTMLDivElement>(ref.current);

      let config = {
        paused: false,
        repeat: -1,
        snap: 1,
        speed: 1,
        paddingRight: 0,
      };
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          console.log(xPercents);

          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        console.log(snap(((curX - distanceToLoop) / widths[i]) * 100));

        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      tl.progress(1, true).progress(0, true); // pre-render for performance
    },
    { scope: container }
  );

  return (
    <div className="flex gap-8 *:shrink-0 overflow-x-hidden" ref={container}>
      {[
        AdamawaSACA,
        BritishCouncil,
        FAO,
        NELA,
        NEMA,
        OCHA,
        UNHCR,
        WorldBank,
      ].map((partner, idx) => (
        <div
          key={partner}
          ref={pushRef}
          // ref={(el: HTMLDivElement) => (ref.current[idx] = el)}
          className="marquee__item"
        >
          <img
            src={partner}
            alt=""
            className="object-center object-scale-down h-[139px] w-fit"
          />
        </div>
      ))}
    </div>
  );
}

export default Partners;
