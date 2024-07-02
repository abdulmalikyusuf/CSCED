import { LucideIcons } from "@/components/icons";
import Image1 from "@/assets/images/neom-wbOKjgQv3nY-unsplash.jpg";
import AboutUsImage from "@/assets/images/about-us/icon-education.png";
import AnimateNumber from "@/components/about-us/animate-number";

const goals = [
  {
    title: "Education",
    text: "Unlock the potential of individuals through our educational empowerment programs. We focus on improving access to quality education, providing scholarships, and implementing innovative learning approaches, creating pathways for a brighter tomorrow",
    image: AboutUsImage,
  },
  {
    title: "Humanitarian Aid and Relief Efforts",
    text: "Responding swiftly to crises, we provide essential humanitarian aid and relief to affected communities. Our dedicated teams ensure the timely delivery of vital resources, offering support in times of emergencies and natural disasters.",
    image: AboutUsImage,
  },
  {
    title: "Community Development Programs",
    text: "Engage in our holistic community development initiatives. From infrastructure projects to educational programs, we work collaboratively to foster sustainable growth and empowerment.",
    image: AboutUsImage,
  },
  {
    title: "Medical Help",
    text: "We prioritize health and well-being through our comprehensive initiatives. From healthcare access projects to nutrition programs, we strive to improve the overall health of communities, ensuring a foundation for a resilient and thriving future",
    image: AboutUsImage,
  },
];
function AboutUs() {
  return (
    <>
      <div className="relative h-[70vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-0 grayscale">
          <img src={Image1} alt="" className="size-full object-cover" />
        </div>
        <div className="z-10">
          <h2 className="text-4xl font-bold text-primary">About Us</h2>
          <div className="mt-4 flex gap-2 items-center text-sm font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="">ABOUT US</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 py-16 bg-white text-[#111]">
        <div className="md:columns-2 lg:gap-16 px-4 sm:px-8 lg:px-16">
          <h5 className="text-lg md:text-3xl font-semibold uppercase md:mb-2">
            about us
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold font-space-grotesk capitalize">
            Future Resilience and Development Foundation (FRAD Foundation)
          </h4>
          <div className="mt-2 md:mt-6 leading-relaxed opacity-80 flex flex-col gap-4">
            <p className="">
              Future Resilience and Development Foundation (FRAD Foundation) is
              a registered Non-profit organization with the corporate affairs
              commission (CAC) with CAC No CAC/IT/NO/139393 in 2019 in
              accordance with the Nigerian Law with office address at Suit B87,
              Mohammed Goni, Complex, Maiduguri Borno state, Nigeria.
            </p>
            <p className="">
              Our organization has grown periodically through our work with
              other sister organizations in the state providing humanitarian and
              development response. Today we have an experienced workforce and
              network of field staff and field researcher and data collectors
              working in 5 LGAs of MMC, JERE, Konduga, Mafa and Magumeri.
            </p>
            <img src={Image1} alt="" className="h-80" />
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
              <h4 className="text-lg md:text-2xl font-medium font-space-grotesk md:mb-2">
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
                    <h6 className="text-xl font-bold">{goal.title}</h6>
                    <p className="mt-2 text-balance leading-relaxed">
                      {goal.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-4 sm:mx-8 lg:mx-16 md:-translate-y-1/2 flex flex-row flex-wrap gap-6 md:gap-0 justify-between items-center py-8 md:py-14 px-10 md:px-20 rounded-2xl bg-[#111] text-white">
            {[
              ["35", "", "years of foundation"],
              ["60", "+", "monthly donors"],
              ["1500", "k", "incredible volunteers"],
              ["785", "", "successful campaign"],
            ].map((stat) => (
              <div key={stat[0]} className="flex items-center gap-1 w-min">
                <h2 className="text-4xl leading-none text-primary font-bold font-space-grotesk">
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
        <div className="px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row gap-8 md:gap-14">
          <div className="flex-1 grid grid-cols-12 grid-rows-12">
            <img
              src={Image1}
              alt=""
              className="aspect-[] row-start-1 row-end-8 col-start-1 col-end-8"
            />
            <img
              src={Image1}
              alt=""
              className="aspect-[] col-start-7 col-end-13 row-start-6 row-end-13"
            />
          </div>
          <div className="flex-1">
            <div className="">
              <h4 className="text-lg md:text-2xl font-medium font-space-grotesk uppercase md:mb-2">
                become a volunteer
              </h4>
              <h3 className="text-3xl md:text-5xl font-bold capitalize">
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

        <div className="px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 shadow-xl rounded-2xl overflow-clip">
            <div className="flex-1">
              <img src={Image1} alt="" className="grayscale h-full w-full" />
            </div>
            <div className="flex-1 p-8">
              <div className="">
                <h4 className="md:text-xl font-medium font-space-grotesk uppercase md:mb-1">
                  testimonials
                </h4>
                <h3 className="text-2xl md:text-4xl font-bold capitalize">
                  what people think
                </h3>
              </div>
              <p className="mt-6 md:mt-10 md:text-lg leading-snug font-medium">
                Aishatu, an IDP from Askira UBA LGA in Maiduguri, used CVA funds
                from Save the Children and FRAD foundation to invest in poultry
                and expand her food business. As a struggling single mother, she
                continues to work hard, utilizing the funds received to increase
                her investments and improve her livelihood.
              </p>
              <div className="mt-4 md:mt-8">
                <h4 className="text-sm md:text-xl font-medium -tracking-tighter">
                  Aisha Yerima
                </h4>
                <h6 className="text-xl md:text-3xl font-semibold font-space-grotesk tracking-tighter">
                  Volunteer
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
