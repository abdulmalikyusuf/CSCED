import { LucideIcons } from "@/components/icons";
import Feature2 from "@/assets/images/feature-2.jpg";
import HumanitarianAid from "@/assets/images/about-us/humatarian-aid.png";
import Education from "@/assets/images/1016545.png";
import MedicalHelp from "@/assets/images/about-us/medical-help.png";
import CommunityDevelopment from "@/assets/images/about-us/community-development.png";
import AnimateNumber from "@/components/about-us/animate-number";
import Testimonials from "@/components/testimonials";
import { Articles } from "@/components/articles";

const goals = [
  {
    title: "Education",
    text: "Unlock the potential of individuals through our educational empowerment programs. We focus on improving access to quality education, providing scholarships, and implementing innovative learning approaches, creating pathways for a brighter tomorrow",
    image: Education,
  },
  {
    title: "Humanitarian Aid and Relief Efforts",
    text: "Responding swiftly to crises, we provide essential humanitarian aid and relief to affected communities. Our dedicated teams ensure the timely delivery of vital resources, offering support in times of emergencies and natural disasters.",
    image: HumanitarianAid,
  },
  {
    title: "Community Development Programs",
    text: "Engage in our holistic community development initiatives. From infrastructure projects to educational programs, we work collaboratively to foster sustainable growth and empowerment.",
    image: CommunityDevelopment,
  },
  {
    title: "Medical Help",
    text: "We prioritize health and well-being through our comprehensive initiatives. From healthcare access projects to nutrition programs, we strive to improve the overall health of communities, ensuring a foundation for a resilient and thriving future",
    image: MedicalHelp,
  },
];
function AboutUs() {
  return (
    <div className="bg-transparent">
      <div className="relative h-[70vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-0">
          <img src={Feature2} alt="" className="size-full object-cover" />
        </div>
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary text-stroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-transparent">
            About Us
          </h2>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="">ABOUT US</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 py-16 bg-white text-black">
        <div className="md:columns-2 lg:gap-16 px-4 sm:px-8 lg:px-16">
          <h5 className="text-lg md:text-3xl font-semibold font-amatic text-primary uppercase md:mb-2">
            about us
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold capitalize">
            Centre for Social Change and Economic Development (CSCED)
          </h4>
          <div className="mt-2 md:mt-6 leading-relaxed text-justify opacity-80 flex flex-col gap-4">
            <p className="">
              Centre for Social Change and Economic Development (CSCED) is a
              registered Non-profit organization with the corporate affairs
              commission (CAC) with CAC No CAC/IT/NO/ in 2019 in accordance with
              the Nigerian Law with office address at Suit B87, Mohammed Goni,
              Complex, Maiduguri Borno state, Nigeria.
            </p>
            <p className="">
              Our organization has grown periodically through our work with
              other sister organizations in the state providing humanitarian and
              development response. Today we have an experienced workforce and
              network of field staff and field researcher and data collectors
              working in 5 LGAs of MMC, JERE, Konduga, Mafa and Magumeri.
            </p>
            <img src={Feature2} alt="" className="h-80" />
            <p className="">
              As an organization, our approach is founded on the integration
              between capacity building of our staff and adherence to strict
              quality assurance procedure, we continue to learn and consider
              each of our projects as an opportunity to improve performance over
              time and raise the standards of our organizations and our donors.
            </p>
            <p className="">
              As an agile organization, we believe in partnership and
              collaboration, as such we are registered with various network of
              civil society organization like Network of civil society
              organizations in Borno, Nigeria Network of NGOs, Network of civil
              society organizations in lake chad regions and Network of ECW
              Youth led organizations.
            </p>
            <p className="">
              Base on the fact that our operations is in Borno state, we are a
              registered organization with the Borno state ministry of
              sustainable development and humanitarian affairs, state emergency
              management agency (SEMA), and other government ministries in
              charge of various humanitarian sectors in the state.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[url(assets/images/clean-gray-paper.png)] pt-8 md:pt-10 pb-16 md:pb-28 px-4 sm:px-8 lg:px-16">
            <div className="text-center">
              <h4 className="text-lg md:text-2xl font-medium text-primary font-amatic md:mb-2">
                HELP IS OUR GOAL
              </h4>
              <h3 className="text-3xl md:text-5xl font-bold">
                What Make Us Different
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-6 md:mt-10">
              {goals.map((goal) => (
                <div
                  key={goal.title}
                  className="flex-1 flex flex-col items-center gap-10 px-6 md:px-4 py-6 rounded-lg max-w-xs max-md:mx-auto hover:bg-white hover:shadow-md"
                >
                  <img src={goal.image} alt="" className="size-[100px]" />
                  <div className="text-center">
                    <h6 className="text-xl leading-none font-bold">
                      {goal.title}
                    </h6>
                    <p className="mt-2 text-justify leading-relaxed">
                      {goal.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-4 sm:mx-8 lg:mx-16 md:-translate-y-1/2 max-md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-between items-center py-8 md:py-14 px-10 md:px-20 rounded-2xl bg-black text-white">
            {[
              ["35", "", "years of foundation"],
              ["60", "+", "monthly donors"],
              ["1500", "", "incredible volunteers"],
              ["785", "", "successful campaign"],
            ].map((stat) => (
              <div key={stat[0]} className="flex items-center gap-1 w-min">
                <h2 className="text-4xl leading-none text-primary font-bold font-amatic">
                  <AnimateNumber
                    from={0}
                    to={parseInt(stat[0])}
                    suffix={stat[1]}
                  />
                  {/* {stat[1]} */}
                </h2>
                <p className="leading-none uppercase font-semibold">
                  {stat[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 sm:px-8 lg:px-16 flex flex-col-reverse md:flex-row gap-8 md:gap-14">
          <div className="flex-1">
            <img src={Feature2} alt="" className="" />
          </div>
          <div className="flex-1">
            <div className="">
              <h4 className="text-lg md:text-2xl font-medium font-amatic text-primary uppercase md:mb-2">
                become a volunteer
              </h4>
              <h3 className="text-3xl md:text-5xl font-bold capitalize font-DMSans">
                why we need you
              </h3>
            </div>
            <p className="mt-4 md:mt-8 md:text-lg">
              Your involvement directly impacts communities in Maiduguri,
              Nigeria, contributing to community development, humanitarian aid,
              and educational programs.
            </p>
          </div>
        </div>

        <Testimonials />

        <div className="px-4 sm:px-8 lg:px-16">
          <div className="text-center">
            <h6 className="md:text-xl font-medium text-primary font-amatic uppercase">
              what's new
            </h6>
            <h3 className="md:mt-2 text-3xl md:text-5xl font-bold font-DMSans capitalize">
              read our latest news
            </h3>
          </div>
          <div className="mt-10">
            <Articles />
          </div>
        </div>
        {/* <Partners /> */}
      </div>
    </div>
  );
}

export default AboutUs;
