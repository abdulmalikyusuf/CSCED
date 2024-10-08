// https://www.motiontricks.com/hamburger-button-with-handwriting/
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Segment from "segment-js";
import { useMediaQuery } from "@/hooks/use-media-query";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuButton({ isOpen, setIsOpen }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const pattyRef = useRef<SVGLineElement | null>(null);
  const bun1Ref = useRef<SVGPathElement | null>(null);
  const bun2Ref = useRef<SVGPathElement | null>(null);
  const lettersRef = useRef<SVGPathElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  const { contextSafe } = useGSAP({ scope: ref });

  useGSAP(() => {
    if (isDesktop) return null;

    const pattySegment = new Segment(pattyRef.current);
    const bun1Segment = new Segment(bun1Ref.current);
    const bun2Segment = new Segment(bun2Ref.current);
    const lettersSegment = new Segment(lettersRef.current);

    gsap.set(ref.current, { autoAlpha: 1 });
    gsap.set(bun1Ref.current, {
      strokeDasharray: bun1Segment.strokeDasharray("0%", "30%"),
    });
    gsap.set(bun2Ref.current, {
      strokeDasharray: bun2Segment.strokeDasharray("0%", "30%"),
    });
    gsap.set(lettersRef.current, {
      strokeDasharray: lettersSegment.strokeDasharray("53.5%", "100%"),
      x: 155,
    });

    tl.to(
      pattyRef.current,
      {
        duration: 0.35,
        strokeDasharray: pattySegment.strokeDasharray("50%", "50%"),
      },
      0
    );
    tl.to(pattyRef.current, { duration: 0.1, opacity: 0, ease: "none" }, 0.25);
    tl.to(
      bun1Ref.current,
      {
        duration: 0.85,
        strokeDasharray: bun1Segment.strokeDasharray("69%", "96.5%"),
      },
      0
    );
    tl.to(
      bun2Ref.current,
      {
        duration: 0.85,
        strokeDasharray: bun2Segment.strokeDasharray("69%", "96.5%"),
      },
      0
    );
    tl.to(
      lettersRef,
      {
        duration: 0.85,
        strokeDasharray: lettersSegment.strokeDasharray("0%", "53%"),
        x: 0,
      },
      0
    );
    tl.reversed(!isOpen);
  }, [isOpen]);

  const handleClick = contextSafe(() => {
    setIsOpen((prev) => !prev);
    tl.reversed(isOpen);
  });

  if (isDesktop) return null;

  return (
    <button
      type="button"
      ref={ref}
      className="size-8 md:size-10 z-[2] text-[#2d2d2d]"
      onClick={handleClick}
    >
      <svg
        id="theBurger"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        stroke={isOpen ? "#fff" : "#2d2d2d"}
      >
        <title>Just another hamburger menu</title>
        <g
          id="burger"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={10}
        >
          <line
            className="patty"
            ref={pattyRef}
            x1="50"
            y1="61"
            x2="150"
            y2="61"
          />
          <path
            className="buns"
            ref={bun1Ref}
            d="M50,29h96c27,0,48-1,34,40-18.12,53.08-48.64,23.86-48.64,23.86L60.64,22.14"
          />
          <path
            className="buns"
            ref={bun2Ref}
            d="M50,94h96c27,0,48,1,34-40C161.88,1,131.36,30.17,131.36,30.17L60.64,100.88"
          />
        </g>
        <path
          className="letters"
          ref={lettersRef}
          d="M51.66,166c2.79-2.5,4.8-7,3.06-9.46S48.93,154,46.1,155.1s-4.74,4-6.12,6.68c-2.12,4.16-3.5,10.06-1.95,14.46A11.65,11.65,0,0,0,47.77,184c4.07.6,8.61-1.95,12.24-3.89,4-2.14,11.87-6.23,14.62-9.74C82,161,82.78,157,85.48,144.81,87,138,89,131,88.76,126.57c-.14-2.6-.29-5.95-2.44-7.08-2.74-1.44-5.94-.55-8.35,1.39s-4,6.07-5.28,8.91A68.73,68.73,0,0,0,67.12,164c.52,5,1.65,9.73,4.58,13.85A11.32,11.32,0,0,0,81,183c4.9,0,7.25-3.39,9.64-7.66,2.07-3.7,2.89-8.06,4.7-11.89s6.83-8.86,10.85-7.51c2.56.86,3,5,3.48,7.7a23.07,23.07,0,0,1-.41,8.06,23.43,23.43,0,0,1-2.11,7.39c-1.22,2.27-4.24,4.7-6.8,4.94-2.85.28-5-1.14-6.4-3.61-1.64-2.84-1.45-7.51-.88-10.36.6-3,1.15-5.56,3.68-6.85,5.22-2.67,5,3.56,8,6.36,4.25,3.93,12.89,4.92,17.25,1.11s7-13.91,9.25-20.24a.77.77,0,0,1,1.46-.15c1.14,2.78,2.47,11.36,3.2,14.27,1.11,4.45.84,6.6-1.12,10-4.45,7.79-9.18.84-11.6-1.29-.46-.41-1,.4-.73.94,4,7.31,11.92,13.07,20.4,7.59,6.14-4,10.69-10.17,14-16.68,1.8-3.54,3.09-8.62-.19-10.86-2.19-1.48-5.35-.56-7.14,1.37s-2.53,4.62-3.07,7.2c-.84,4-1.37,8.24-.24,12.19s4.25,7.56,8.32,8.15c5.63.82,10.33-4,14-8.4l9.21-13.39a1.26,1.26,0,0,1,2.23.73l.32,19.13c.05.91,1,1.81,1.79,1.34,2.25-1.34,4.94-5.77,5.65-8.38A53,53,0,0,1,191.59,164c1.55-2.92,3.09-5.25,5.29-2.78,1.38,1.55.28,4.6.28,6.68s-.26,6.55-.28,8.62c0,2.52,1.18,4.79,3.89,3.06.84-.53,2.19-3.8,2.51-4.73,1.58-4.6,4.47-11.17,6.53-15.64a1.16,1.16,0,0,1,2.08,0c1,2-.22,6.87-.3,9.11-.11,3-.58,6.18.43,9.06s3.61,4.71,7.39,4.74c3.73-.59,5.93-1.22,8.11-3.3A38.27,38.27,0,0,0,237,165.26c.79-1.93,1.32-4,1.94-6,.55-2.5.84-5.41-1.12-6.39a5.6,5.6,0,0,0-6.12,1.11c-1.58,1.51-2.74,4.5-3.42,6.58-1.32,4-2.16,8.37-1.2,12.49s5.12,8.76,9.35,8.75a12.41,12.41,0,0,0,9-3.64,39.9,39.9,0,0,0,6.88-8.6c1.54-2.62,3.16-7.24,5.23-9.45a1,1,0,0,1,1.72.57c.46,4.27,0,10.27.28,14.72,0,.48-.26,2.66,0,3.4a2.27,2.27,0,0,0,2.88,1.32,7.37,7.37,0,0,0,2.38-2.5c2.86-5.55,5.85-14,8.58-19.45a1.33,1.33,0,0,1,2.52.48c.36,4.87-2.83,14.71-.25,19,1.64,2.73,4.93,3.58,8.07,3.06s6-3,8-5.46a40,40,0,0,0,5.34-7.89c.94-1.93,3.06-8.71,3.85-10.73a.38.38,0,0,1,.72.2c-.62,3.46-3.3,11.74-3.46,15.26a7.89,7.89,0,0,0,2.22,5.84,4.74,4.74,0,0,0,7.3-.6,20.17,20.17,0,0,0,3.58-8.13c.34-1.37,1.93-8.89,2.65-10.1a1.17,1.17,0,0,1,2.17.77c-.3,2.18-1.53,10.49-1.14,12.65.61,3.32,2.53,7.47,5.9,7.61,7.64.31,13.76-8.77,16.55-16.11"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={4}
        />
      </svg>
    </button>
  );
}

export default MenuButton;
