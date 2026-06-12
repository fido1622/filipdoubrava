import BentoGrid from "@/app/components/bento-grid";
import Nav from "@/app/components/nav";
import { SelectedProjectsSection } from "@/app/components/selected-projects";
import AboutSection from "@/app/components/about-section";
import FpvMavic from "@/app/components/fpv-mavic";
import CategoriesSection from "@/app/components/categories-section";
import EquipmentSection from "@/app/components/equipment-section";
import ContactSection from "@/app/components/contact-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero — full viewport height, bento grid centred */}
      <section
        className="overflow-hidden flex items-center justify-center p-3 md:p-4"
        style={{ minHeight: '100svh' }}
        aria-label="Hero"
      >
        <BentoGrid />
      </section>

      <SelectedProjectsSection />

      {/* ── Bridge: references + CTA ── */}
      <div
        style={{
          background: '#050505',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
        className="px-8 md:px-14 py-10 flex flex-col sm:flex-row items-center justify-between gap-5"
      >
        <a
          href="#selected-projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            border: '1px solid rgba(203,255,0,0.38)',
            borderRadius: '9999px',
            padding: '18px 44px',
            color: '#CBFF00',
            fontFamily: "'Barlow Condensed', Impact, sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'rgba(203,255,0,0.04)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Zobrazit reference
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="#CBFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <span
          style={{
            width: '1px',
            height: '36px',
            background: 'rgba(255,255,255,0.1)',
            flexShrink: 0,
          }}
          className="hidden sm:block"
        />

        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            borderRadius: '9999px',
            padding: '18px 44px',
            color: '#000',
            fontFamily: "'Barlow Condensed', Impact, sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: '#CBFF00',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Book a shoot
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <CategoriesSection />
      <AboutSection />
      <FpvMavic />
      <EquipmentSection />
      <ContactSection />
    </main>
  );
}
