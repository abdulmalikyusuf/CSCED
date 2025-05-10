import { useRef } from "react";
import gsap from "gsap";
import { Link } from "@tanstack/react-router";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";
import 'splitting/dist/splitting.css'; // Import Splitting CSS for base styles
// import 'splitting/dist/splitting-cells.css'; // Optional: if you use cells later

gsap.registerPlugin(ScrollTrigger);

function Hero({
  imageUrl,
  text, // Assuming this is for the main title (h6)
  subText // Added a new prop for the text to be animated line by line (h2)
}: {
  imageUrl: string;
  text: string;
  subText: string; // New prop for the subtitle
}) {
  const container = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subTitleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);


  const lineAnimationDefaults = {
    duration: 0.7,
    ease: "power2.out",
  };

  const animateLinesIn = () => {
    if (subTitleRef.current === null) return;

    const lines = subTitleRef.current.querySelectorAll(".line .word, .line .char"); // Splitting.js creates .word or .char inside .line
    // We animate these children of .line

    if (lines.length > 0) {
      gsap.set(lines, { // Set initial state for the content within lines
        yPercent: 105, // Start from slightly below the line height
        opacity: 0,
        willChange: "transform, opacity"
      });
      gsap.to(lines, {
        ...lineAnimationDefaults,
        yPercent: 0,
        opacity: 1,
        stagger: 0.06, // Stagger the appearance of each word/char group
        delay: 0.3, // Delay after title animation
      });
    } else {
      // Fallback for single line text or if splitting by lines didn't occur as expected
      gsap.fromTo(subTitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
      );
    }
  };

  const resetLines = () => {
    if (subTitleRef.current === null) return;
    const lines = subTitleRef.current.querySelectorAll(".line .word, .line .char");
    if (lines.length > 0) {
      gsap.killTweensOf(lines);
      gsap.set(lines, {
        opacity: 0,
        yPercent: 105,
      });
    } else {
      gsap.killTweensOf(subTitleRef.current);
      gsap.set(subTitleRef.current, { opacity: 0, y: 20 });
    }
  };

  const animateTitleIn = () => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );
    }
  };

  const resetTitle = () => {
    if (titleRef.current) {
      gsap.killTweensOf(titleRef.current);
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
    }
  }

  const animateButtonIn = () => {
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.8 } // Delay after lines
      );
    }
  };

  const resetButton = () => {
    if (buttonRef.current) {
      gsap.killTweensOf(buttonRef.current);
      gsap.set(buttonRef.current, { opacity: 0, y: 20 });
    }
  };


  useGSAP(
    () => {
      if (container.current === null || !subTitleRef.current || !titleRef.current || !buttonRef.current) return;

      // Call Splitting.js on the subtitle to split it by lines.
      // This will wrap each line in a span with class "line".
      // Inside each ".line", words will be wrapped in ".word", and chars in ".char".
      Splitting({ target: subTitleRef.current, by: "lines" });


      // Style the .line elements to hide overflow. This is crucial.
      // Each .line element needs to act as a mask for its content.
      const lineElements = subTitleRef.current.querySelectorAll(".line");
      if (lineElements.length > 0) {
        lineElements.forEach(lineEl => {
          (lineEl as HTMLElement).style.display = 'block'; // Or 'flex' if words are inline-block and you want them to wrap naturally
          (lineEl as HTMLElement).style.overflow = 'hidden';
          // (lineEl as HTMLElement).style.height = (lineEl as HTMLElement).offsetHeight + "px"; // Optional: fix height if dynamic changes cause flicker
        });
      }


      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%", // Start animation when 70% of the hero is visible
        // markers: true, // Uncomment for debugging ScrollTrigger
        onEnter: () => {
          animateTitleIn();
          animateLinesIn();
          animateButtonIn();
        },
        onLeaveBack: () => { // When scrolling up past the trigger
          resetTitle();
          resetLines();
          resetButton();
        },
        // onEnterBack: () => { // Re-animate if scrolling back into view from top (optional)
        //   animateTitleIn();
        //   animateLinesIn();
        //   animateButtonIn();
        // },
        // onLeave: () => { // When scrolling down past the trigger (optional reset)
        //   resetTitle();
        //   resetLines();
        //   resetButton();
        // },
        once: false // Set to true if you want the animation to play only once
      });

      // Set initial pre-animation states
      resetTitle();
      resetLines();
      resetButton();

    },
    { scope: container, dependencies: [subText, text] } // Re-run if text props change
  );

  return (
    <div ref={container} className="flex-[0_0_100vw] min-w-0 relative h-screen max-h-[900px] flow-root">
      <div className="absolute inset-0 -z-10"> {/* Ensure image is behind text */}
        <img src={imageUrl} alt="Hero background" className="size-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-0 bg-black/30"></div> {/* Optional overlay for text readability */}

      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center px-4 relative z-10">
        <h6
          className="text-lg md:text-2xl uppercase mb-2 md:mb-6 lg:mb-12 text-gray-100 opacity-0" // Initial opacity
          ref={titleRef}
        >
          {text}
        </h6>
        <h2
          className="text-4xl md:text-6xl font-bold capitalize tracking-wider font-QuickSand text-white [--color-highlight-end:_#fff] [--color-highlight-end-alt:_var(--primary)]"
          // data-splitting="lines" // Splitting is called in useGSAP
          ref={subTitleRef}
          // Add aria-label for accessibility if content is visually different from DOM structure
          aria-label={subText}
        >
          {/* The subText prop will be placed here by React, then Splitting.js will process it */}
          {subText}
        </h2>
        <Link
          ref={buttonRef}
          to="/about-us"
          // type="button" // Link doesn't have a type="button" prop, it's more for <button>
          className="mt-4 md:mt-6 lg:mt-8 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full text-sm uppercase font-medium transition-colors duration-300 opacity-0" // Initial opacity
        >
          learn more
        </Link>
      </div>
    </div>
  );
}

export default Hero;