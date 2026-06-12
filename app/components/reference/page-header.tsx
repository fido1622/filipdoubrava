export default function PageHeader() {
  return (
    <div className="px-8 md:px-12 pt-12 pb-5">
      <h1
        style={{
          fontFamily: "'Barlow Condensed', Impact, sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(72px, 9vw, 112px)',
          lineHeight: 0.88,
          letterSpacing: '-0.01em',
          color: '#ffffff',
          margin: 0,
        }}
      >
        Reference
      </h1>
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: 1.45,
          color: 'rgba(255,255,255,0.52)',
          marginTop: '12px',
          maxWidth: '500px',
        }}
      >
        Vybrané práce a finální výstupy. Každý projekt vede přímo na finální video.
      </p>
    </div>
  );
}
