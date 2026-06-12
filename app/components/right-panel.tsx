export default function RightPanel() {
  return (
    <div className="panel-dark rounded-[18px] relative overflow-hidden w-full h-full">
      {/* B&W two-people photo */}
      <div className="absolute inset-0">
        <img
          src="/images/panel-two-people.jpg"
          alt=""
          className="photo-bw w-full h-full object-cover object-[center_38%] md:object-center"
        />
        {/* Top vignette for badge and circle legibility */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
      </div>

      {/* "SIMPLE" outlined pill badge — top-left */}
      <div className="absolute top-4 left-4 z-10 border-[1.5px] border-[#CBFF00] rounded-full px-4 py-[6px] md:top-5 md:left-5">
        <span
          className="font-bold uppercase tracking-[0.08em]"
          style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif", fontSize: "11px", color: "#CBFF00" }}
        >
          Drone pilot
        </span>
      </div>

      {/* Solid neon-yellow circle — top-right */}
      <div className="absolute top-4 right-4 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#CBFF00] md:top-5 md:right-5" />
    </div>
  );
}
