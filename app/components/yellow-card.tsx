export default function YellowCard() {
  return (
    <div
      className="relative rounded-[18px] overflow-hidden p-5 md:p-7 flex flex-col justify-between gap-4 md:gap-0 w-full h-full"
      style={{ background: "#CBFF00", color: "#000000" }}
    >
      {/* FD brand label — top-right */}
      <span
        className="absolute top-5 right-5 font-bold uppercase tracking-[-0.01em] md:top-7 md:right-7"
        style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif", fontSize: "15px", color: "#000000" }}
      >
        FD
      </span>

      {/* Three nav rows */}
      <div className="flex flex-col gap-2 md:gap-3">

        {/* Showreel */}
        <div className="flex items-center gap-3 md:gap-5">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", border: "2px solid rgba(0,0,0,0.8)" }}
          >
            <svg width="11" height="13" viewBox="0 0 16 20" fill="none">
              <path d="M2 2.5l12 7.5-12 7.5V2.5z" fill="#000" />
            </svg>
          </div>
          <div>
            <p className="uppercase font-black leading-none tracking-[-0.01em]"
              style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif", fontSize: "clamp(26px, 2.6vw, 44px)", color: "#000" }}>
              FPV Showreel 2023
            </p>
            <p className="uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "rgba(0,0,0,0.5)", letterSpacing: "0.1em", marginTop: "2px" }}>
              FPV · 2 min
            </p>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(0,0,0,0.15)" }} />

        {/* Reference & projekty */}
        <div className="flex items-center gap-3 md:gap-5">
          <a href="#testimonials"
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", border: "2px solid rgba(0,0,0,0.8)", textDecoration: "none", color: "#000" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div>
            <p className="uppercase font-black leading-none tracking-[-0.01em]"
              style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif", fontSize: "clamp(26px, 2.6vw, 44px)", color: "#000" }}>
              Reference & projekty
            </p>
            <p className="uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "rgba(0,0,0,0.5)", letterSpacing: "0.1em", marginTop: "2px" }}>
              Vybrané práce · Co říkají klienti
            </p>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(0,0,0,0.15)" }} />

        {/* Produkční možnosti */}
        <div className="flex items-center gap-3 md:gap-5">
          <a href="#equipment"
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", border: "2px solid rgba(0,0,0,0.8)", textDecoration: "none", color: "#000" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div>
            <p className="uppercase font-black leading-none tracking-[-0.01em]"
              style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif", fontSize: "clamp(26px, 2.6vw, 44px)", color: "#000" }}>
              Produkční možnosti
            </p>
            <p className="uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "rgba(0,0,0,0.5)", letterSpacing: "0.1em", marginTop: "2px" }}>
              Mavic · FPV · Cinema · Broadcast
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="flex items-center justify-between">
        <a
          href="#contact"
          className="flex items-center gap-2 uppercase font-black"
          style={{
            fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(22px, 3.5vw, 56px)",
            color: "#000",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          Mám zájem o spolupráci
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: "#000000" }} />
      </div>
    </div>
  );
}
