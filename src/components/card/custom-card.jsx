import React from "react";
import { ArrowRight } from "lucide-react";

const CustomCard = ({ imageUrl, title, href }) => {
  return (
    <div className="relative w-full h-64 group">
      {/* Main Card */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden transition-transform duration-300 ease-out"
        style={{
          clipPath: "path('M 0 0 H 100% V calc(100% - 40px) Q calc(100% - 40px) 100%, 100% calc(100% - 40px) V 0 Z')",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 opacity-50" />

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-start">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Arrow Button */}
      <a
        href={href}
        className="absolute -bottom-3 -right-3 w-12 h-12 bg-black rounded-full flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-black/90"
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};

export default CustomCard;
