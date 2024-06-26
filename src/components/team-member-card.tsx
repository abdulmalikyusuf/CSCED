import { LucideIcons } from "./icons";

function TeamMemberCard() {
  return (
    <div className="rounded-lg shadow-xl overflow-clip">
      <div className="relative">
        <img
          src="src/assets/images/neom-wbOKjgQv3nY-unsplash.jpg"
          alt=""
          className="object-cover h-80 w-full lg:w-96"
        />
        <div className="absolute bottom-14 right-0">
          <div className="group/share flex items-center p-[5px] rounded-l-full bg-[#01592E] transition-transform duration-500 will-change-transform translate-x-[calc(100%-60px)] hover:bg-[#FFAC00] hover:translate-x-0">
            <div className="flex items-center justify-center size-11 rounded-full bg-white text-xl mr-auto">
              <LucideIcons.share className="stroke-[#01592E] group-hover/share:stroke-[#FFAC00]" />
            </div>
            <div className="flex gap-2 ml-4">
              <div className="size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.twitter size={16} className="" />
              </div>
              <div className="size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.facebook size={16} className="" />
              </div>
              <div className="size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.linkedIn size={16} className="" />
              </div>
              <div className="size-8 rounded-full flex justify-center items-center border border-white">
                <LucideIcons.instagram size={16} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-4 px-8">
        <h6 className="text-xl font-bold mb-6 text-[#232323]">
          Ibrahim Ishaku Balami
        </h6>
        <div className="pt-2 border-t">
          <p className="text-[#232323] capitalize font-medium opacity-80">
            board member
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
