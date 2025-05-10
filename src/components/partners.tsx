import { GroupField } from "@prismicio/client";
import Marquee from "react-fast-marquee";
import { IndexDocumentDataPartnersItem, Simplify } from "#/types.generated";

function Partners({ partners }: { partners: GroupField<Simplify<IndexDocumentDataPartnersItem>> | undefined }) {

  if (!partners) return null
  return (
    <Marquee
      pauseOnHover
      pauseOnClick
      direction="left"
      className="flex gap-8 *:shrink-0 overflow-x-hidden *:px-10"
    >
      {partners.map((partner: Simplify<IndexDocumentDataPartnersItem>) => (
        <div key={partner.partner_image.alt} className="marquee__item">
          <img
            src={partner.partner_image.url!}
            alt=""
            className="object-center object-scale-down h-[139px] w-fit"
          />
        </div>
      ))}
    </Marquee>
  );
}

export default Partners;
