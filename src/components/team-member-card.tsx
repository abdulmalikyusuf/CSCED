import { LucideIcons } from "./icons";
import TeamMemberPhoto from "@/assets/images/pexels-rdne-6646945.jpg";

function TeamMemberCard() {
  return (
    <div className="rounded-lg shadow-xl overflow-clip group/parent">
      <div className="relative">
        <img
          src={TeamMemberPhoto}
          alt=""
          className="object-cover h-80 md:h-96 w-full group-hover/parent:grayscale"
        />
        <div className="absolute bottom-14 right-0">
          <div className="flex items-center p-[5px] rounded-l-full bg-black transition-transform duration-500 will-change-transform translate-x-[calc(100%-60px)] hover:bg-[#FFAC00] group-hover/parent:translate-x-0">
            <div className="flex items-center justify-center size-11 rounded-full bg-white text-xl mr-auto">
              <LucideIcons.share className="stroke-black group-hover/parent:stroke-[#f8c792]" />
            </div>
            <div className="flex gap-2 ml-4">
              <div className="opacity-0 group-hover/parent:opacity-100 size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.twitter size={16} className="" />
              </div>
              <div className="opacity-0 group-hover/parent:opacity-100 size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.facebook size={16} className="" />
              </div>
              <div className="opacity-0 group-hover/parent:opacity-100 size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.linkedIn size={16} className="" />
              </div>
              <div className="opacity-0 group-hover/parent:opacity-100 size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.instagram size={16} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-4 px-8">
        <h6 className="text-xl md:text-2xl font-medium font-Montserrat mb-4 text-[#232323] hover:text-primary">
          Ibrahim Muhammad
        </h6>
        <div className="pt-2 border-t">
          <p className="text-sm md:text-base font-space-grotesk text-[#232323] capitalize font-medium opacity-80">
            board member
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
