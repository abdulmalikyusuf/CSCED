import React from "react";

function Partners() {
  return (
    <div className="flex *:shrink-0 overflow-scroll">
      {"ghsty".split("").map((i) => (
        <div
          key={i}
          className="relative overflow-hidden group *:[transition-timing-function:_cubic-bezier(0.65,0,0.35,1)]"
        >
          <img
            src="src/assets/images/Frame-123-1.png"
            alt=""
            className="flex transition-all duration-500 group-hover:-translate-y-full"
          />
          <img
            src="src/assets/images/Frame-123-1.png"
            alt=""
            className="translate-y-full absolute inset-0 transition-all duration-500 group-hover:translate-y-0"
          />
        </div>
      ))}
    </div>
  );
}

export default Partners;
