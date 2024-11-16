import Marquee from "react-fast-marquee";

import Image30 from "@/assets/images/partners/Rectangle 30.png";
import Image31 from "@/assets/images/partners/Rectangle 31.png";
import Image32 from "@/assets/images/partners/Rectangle 32.png";
import Image33 from "@/assets/images/partners/Rectangle 33.png";
import Image34 from "@/assets/images/partners/Rectangle 34.png";
import Image35 from "@/assets/images/partners/Rectangle 35.png";
import Image36 from "@/assets/images/partners/Rectangle 36.png";
import Image37 from "@/assets/images/partners/Rectangle 37.png";
import Image38 from "@/assets/images/partners/Rectangle 38.png";
import Image39 from "@/assets/images/partners/Rectangle 39.png";

function Partners() {
  return (
    <Marquee
      pauseOnHover
      pauseOnClick
      direction="left"
      className="flex gap-8 *:shrink-0 overflow-x-hidden *:px-10"
    >
      {[
        Image30,
        Image31,
        Image32,
        Image33,
        Image34,
        Image35,
        Image36,
        Image37,
        Image38,
        Image39,
      ].map((partner) => (
        <div key={partner} className="marquee__item">
          <img
            src={partner}
            alt=""
            className="object-center object-scale-down h-[139px] w-fit"
          />
        </div>
      ))}
    </Marquee>
  );
}

export default Partners;
