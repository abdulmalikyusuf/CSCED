import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TestimonialAuthorImage from "@/assets/img/10.jpg";
import { LucideIcons } from "./icons";

function Testimonials() {
  const container = useRef<HTMLDivElement | null>(null);
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);
  const ref = useRef<HTMLDivElement[]>([]);
  const currentEl = 0;

  const pushRef = (el: HTMLDivElement | null) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const { contextSafe } = useGSAP({ scope: container.current });

  const nextTestimonial = contextSafe(() => {
    if (ref.current.length === 0) return;
    gsap.to(ref.current, { xPercent: -100 });
  });

  return (
    <div
      ref={container}
      className="flex flex-col md:flex-row items-center gap-14 px-4 sm:px-8 lg:px-16"
    >
      <div className="md:w-2/5 md:shrink-0">
        <h5 className="text-xl md:text-2xl text-primary md:font-medium font-space-grotesk uppercase">
          testimonials
        </h5>
        <h2 className="md:mt-1 text-3xl md:text-5xl font-bold font-DMSans">
          What People Say About Our Mission
        </h2>
        <p className="mt-2 md:mt-4 md:text-lg md:leading-snug">
          We continually experiment. We fail quickly and productively. We use
          data and feedback to guide our course.
        </p>
        <div className="mt-4 md:mt-6">
          <button
            type="button"
            className="px-6 py-3 font-medium border-2 border-primary capitalize rounded-full"
          >
            all testimonials
          </button>
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          ref={prevBtn}
          className="z-[1] absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white size-12 rounded-full shadow-md shadow-primary flex justify-center items-center"
        >
          <LucideIcons.chevronRight size={20} className="-rotate-180" />
        </button>
        <button
          type="button"
          ref={nextBtn}
          onClick={nextTestimonial}
          className="z-[1] absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white size-12 rounded-full shadow-md shadow-primary flex justify-center items-center"
        >
          <LucideIcons.chevronRight size={20} className="" />
        </button>
        <div className="flex gap-4 overflow-hidden">
          {"gh".split("").map((testimonial) => (
            <div
              key={testimonial}
              ref={pushRef}
              className="flex-1 shrink-0 shadow-2xl shadow-primary rounded-2xl p-10"
            >
              <p className="leading-relaxed">
                Maryam Umar, a 38-year-old housewife" from Gwange 3, Maiduguri,
                received N132,000 through the MPCA intervention in four monthly
                disbursements of N33,000. Grateful for the support from FRAD
                Foundation and Save the Children, she used the funds for basic
                household needs and started a business, now earning up to a
                thousand Naira daily.
              </p>
              <div className="mt-4 md:mt-8 flex items-center gap-4">
                <div className="shrink-0">
                  <img
                    src={TestimonialAuthorImage}
                    alt=""
                    className="size-12 rounded-full"
                  />
                </div>
                <div className="">
                  <h6 className="whitespace-nowrap text-xl font-bold font-space-grotesk">
                    Binta Yerima
                  </h6>
                  <p className="mt-1 capitalize font-medium font-DMSans">
                    volunteer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
