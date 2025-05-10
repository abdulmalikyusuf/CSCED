import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TestimonialAuthorImage from "@/assets/img/10.jpg";
import { LucideIcons } from "./icons";
import { AboutUsDocumentDataTestimonialItem } from "#/types.generated";
import { GroupField, RichTextField, TitleField } from "@prismicio/client";
import { Simplify } from "@/types";
import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react";

type TestimonialsProps = { testimonials: GroupField<Simplify<AboutUsDocumentDataTestimonialItem>>, title: TitleField | undefined, text: RichTextField | undefined, subtitle: RichTextField | undefined };


function Testimonials({ testimonials, text, subtitle, title }: TestimonialsProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);
  const ref = useRef<HTMLDivElement[]>([]);
  let currentSlide = 1;

  const pushRef = (el: HTMLDivElement | null) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const { contextSafe } = useGSAP({ scope: container.current! });

  let isAnimating;

  const navigate = contextSafe((direction: "right" | "left") => {
    if (isAnimating) return;
    const items = gsap.utils.toArray<HTMLDivElement>(ref.current);

    isAnimating = true;

    if (direction === "right") {
      gsap.to(items, {
        x:
          currentSlide < ref.current.length
            ? `-=${currentSlide > 1 ? 320 + 20 : 320}`
            : 0,
      });
      currentSlide === ref.current.length
        ? (currentSlide = 1)
        : (currentSlide += 1);
    } else {
      gsap.to(items, {
        x: `+=${currentSlide > 1 ? 320 + 20 : 0}`,
      });
      currentSlide === 1 ? (currentSlide = 1) : (currentSlide -= 1);
    }

    isAnimating = false;
  });

  return (
    <div
      ref={container}
      className="flex flex-col md:flex-row items-center gap-14 px-4 sm:px-8 lg:px-16 bg-transparent"
    >
      <div className="md:w-2/5 md:shrink-0">
        <div className="text-xl md:text-2xl text-primary md:font-medium font-amatic uppercase">
          <PrismicText field={title} />
        </div>
        <div className="md:mt-1 text-3xl md:text-5xl font-bold font-DMSans">
          <PrismicText field={subtitle} />
        </div>
        <div className="mt-2 md:mt-4 md:text-lg md:leading-snug">
          <PrismicRichText field={text} />
        </div>
      </div>

      <div className="relative grow-0 w-full md:w-3/5 overflow-x-hidden hfull">
        <button
          type="button"
          ref={prevBtn}
          onClick={() => navigate("left")}
          className="z-[1] absolute top-[80%] left-0 -translate-y-1/2 bg-white size-12 rounded-full shadow-md shadow-primary flex justify-center items-center"
        >
          <LucideIcons.chevronRight size={20} className="-rotate-180" />
        </button>
        <button
          type="button"
          ref={nextBtn}
          onClick={() => navigate("right")}
          className="z-[1] absolute top-[80%] right-0 -translate-y-1/2 bg-white size-12 rounded-full shadow-md shadow-primary flex justify-center items-center"
        >
          <LucideIcons.chevronRight size={20} className="" />
        </button>
        <div className="flex gap-4 overflowx-scroll no-scrollbar">
          {testimonials.map((testimonial: Simplify<AboutUsDocumentDataTestimonialItem>) => (
            <div
              key={testimonial.author_name[0]?.text}
              ref={pushRef}
              className="shrink-0 w-[20rem] shadow-2xl shadow-primary rounded-2xl p-10"
            >
              <div className="leading-relaxed">
                <PrismicRichText field={testimonial.testimonial_content_text} />
              </div>
              <div className="mt-4 md:mt-8 flex items-center gap-4">
                <div className="shrink-0">
                  <PrismicImage
                    field={testimonial.author_image}
                    alt=""
                    className="size-12 rounded-full"
                  />
                </div>
                <div className="">
                  <div className="whitespace-nowrap text-xl font-bold font-amatic">
                    <PrismicText field={testimonial.author_name} />
                  </div>
                  <div className="mt-1 capitalize font-medium font-DMSans">
                    <PrismicRichText field={testimonial.author_occupation} />
                  </div>
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
