/* eslint-disable prefer-const */
// @ts-nocheck

import Marquee from "react-fast-marquee";

import AdamawaSACA from "@/assets/images/partners/adamawa-SACA.jpg";
import BritishCouncil from "@/assets/images/partners/british-council.png";
import FAO from "@/assets/images/partners/fao.jpg";
import NELA from "@/assets/images/partners/nela.jpg";
import NEMA from "@/assets/images/partners/nema.jpg";
import OCHA from "@/assets/images/partners/search-for-common-ground.jpg";
import UNHCR from "@/assets/images/partners/unhcr.png";
import WorldBank from "@/assets/images/partners/world-bank.jpg";

function Partners() {
  return (
    <Marquee
      pauseOnHover
      pauseOnClick
      direction="left"
      className="flex gap-8 *:shrink-0 overflow-x-hidden"
    >
      {[
        AdamawaSACA,
        BritishCouncil,
        FAO,
        NELA,
        NEMA,
        OCHA,
        UNHCR,
        WorldBank,
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
