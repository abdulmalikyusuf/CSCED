import { ReactNode, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Overlay({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayPathRef = useRef<SVGPathElement | null>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const openMenu = contextSafe(() => {
    gsap
      .timeline({
        // onComplete: () => (isAnimating = false),
      })
      .set(overlayPathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" }, //closed
      })
      .to(
        overlayPathRef.current,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" }, //curved at the top
        },
        0
      )
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" }, //opened full
      })
      // now reveal
      .set(overlayPathRef.current, {
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" }, //opened full
      })
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" }, // curved at bottom
      })
      .to(overlayPathRef.current, {
        duration: 0.8,
        ease: "power4",
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" }, //closed
      });
  });

  const closeMenu = contextSafe(() => {
    //   if (isAnimating) return;
    //   isAnimating = true;
    gsap
      .timeline({
        //   onComplete: () => (isAnimating = false),
      })
      .set(overlayPathRef, {
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .to(
        overlayPathRef,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
        },
        0
      )
      .to(overlayPathRef, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        //   onComplete: () => {
        //     frame.classList.remove("frame--menu-open");
        //     menuWrap.classList.remove("menu-wrap--open");
        //   },
      })
      // now reveal
      .set(overlayPathRef, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(overlayPathRef, {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
      })
      .to(overlayPathRef, {
        duration: 0.8,
        ease: "power4",
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });
  });

  useEffect(() => {
    isOpen ? openMenu() : closeMenu();
  }, [isOpen]);

  return (
    <div ref={containerRef} className="z-[999]">
      <svg
        className="overlay w-full h-full absolute inset-0 z-50"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Edit the paths here: https://yqnn.github.io/svg-path-editor/ */}
        <path
          ref={overlayPathRef}
          className="overlay__path h-full w-full"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          fill="#4f6c5e"
        />
      </svg>
      {children}
    </div>
  );
}

export default Overlay;
