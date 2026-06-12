const clients = [
  'VISA',
  'Česká spořitelna',
  'ŠKODA',
  'OKTAGON',
  'ROCK FOR PEOPLE',
  'DARKSHIRE 2024',
  'DJI',
  'Let It Roll',
  'FRANZ JOSEF KAISER',
  'FORTUNA',
  'MUNI',
  'ROLLS-ROYCE',
  'HOPI HOLDING',
  'ZAPA BETON',
  'RABEN',
  'ALBION CARS',
  "L'Étape",
  'Velká pardubická',
  'investiční podcast',
  'J&T Banka',
  'JUNGHEINRICH',
  'TRITON',
  'RE/MAX',
  'CYBERTRUCK',
  'CHALET ASTRÉ',
  'Nordic telecom',
  'PEPSI',
  'DIRECT AUTO',
  'BIKEFEST',
  'SAZKA',
  'QUIX',
  'Next Move.',
  'Aikido - Street Story',
  'BEDNAR',
  'HarvestLove',
  'SVĚT MOTORŮ',
  'Český královský institut',
  'IDM',
  'livestream',
  'LESWOOD',
];

const musicVideos = [
  { artist: 'Smack One', title: 'Každej Z Vás' },
  { artist: 'Eva Burešová', title: 'Slzy' },
  { artist: 'Renne Dang', title: 'Nálady a Výkyvy' },
  { artist: 'ERNE100', title: 'TRANSPORT' },
  { artist: 'Orion & Čistychov', title: '2 Chudáčci' },
  { artist: 'Tomba ft. Paulie Garand', title: null },
  { artist: 'Jay Diesel', title: 'BALANC' },
  { artist: 'Černý žaludi', title: 'Čauve Čůčo' },
  { artist: 'Jakub König', title: 'Zprávy' },
  { artist: 'SIllY', title: 'Vlastní Úroveň' },
];

export default function ClientListSection() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '64px 48px 96px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
        }}
        className="md:grid-cols-2 grid-cols-1"
      >
        {/* Commercial clients */}
        <div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '28px',
            }}
          >
            Klienti
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {clients.map((client) => (
              <li
                key={client}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.72)',
                  padding: '7px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  lineHeight: 1.2,
                }}
              >
                {client}
              </li>
            ))}
          </ul>
        </div>

        {/* Music videos */}
        <div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '28px',
            }}
          >
            Videoklipy
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {musicVideos.map((mv) => (
              <li
                key={mv.artist}
                style={{
                  padding: '7px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  lineHeight: 1.2,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.72)',
                  }}
                >
                  {mv.artist}
                </span>
                {mv.title && (
                  <>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.28)',
                        margin: '0 6px',
                      }}
                    >
                      —
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: 'rgba(255,255,255,0.42)',
                        fontStyle: 'italic',
                      }}
                    >
                      {mv.title}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
