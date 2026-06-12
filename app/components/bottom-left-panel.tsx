import { ArrowRight } from "lucide-react";

export default function BottomLeftPanel() {
  return (
    <div className="panel-dark rounded-[18px] relative overflow-hidden w-full h-full">
      {/* B&W woman close-up */}
      <div className="absolute inset-0">
        <img
          src="/images/panel-woman-closeup.jpg"
          alt=""
          className="photo-bw w-full h-full object-cover object-[60%_center]"
        />
        {/* Bottom gradient for arrow readability */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      </div>

      {/* Arrow-in-circle CTA — bottom-left */}
      <div className="absolute bottom-4 left-4 z-10 w-10 h-10 md:w-11 md:h-11 md:bottom-5 md:left-5 rounded-full border-[1.5px] border-[#CBFF00] flex items-center justify-center hover:bg-[#CBFF00] group transition-colors duration-200 cursor-pointer">
        <ArrowRight
          className="w-4 h-4 group-hover:text-black transition-colors duration-200"
          strokeWidth={2}
          style={{ color: "#CBFF00" }}
        />
      </div>
    </div>
  );
}
