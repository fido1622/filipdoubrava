'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const PROJECT_TYPES = [
  { value: '', label: 'Typ projektu' },
  { value: 'commercial', label: 'Komerční reklama' },
  { value: 'sport', label: 'Sport / Events' },
  { value: 'real-estate', label: 'Nemovitosti' },
  { value: 'documentary', label: 'Dokumentární' },
  { value: 'other', label: 'Jiný' },
];

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 group transition-colors duration-200"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.38)',
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
    >
      <span>{label}</span>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5 }}>
        <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '14px 16px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ padding: '0 0 0', background: '#000' }}
    >
      {/* Separator line */}
      <div
        className="max-w-[1600px] mx-auto px-4 md:px-8 mb-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 0 }}
      />

      <div
        style={{
          background: '#050505',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-24 md:py-36">
          <div className="grid grid-cols-12 gap-[10px] lg:gap-16">
            {/* Left — headline + info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(60px, 8.5vw, 124px)',
                    lineHeight: 0.85,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  BOOK
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>A</span>
                  <br />
                  <span
                    style={{
                      WebkitTextStroke: '1.5px rgba(255,255,255,0.3)',
                      color: 'transparent',
                    }}
                  >
                    SHOOT
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13.5px',
                    color: 'rgba(255,255,255,0.42)',
                    lineHeight: 1.75,
                    maxWidth: '340px',
                    marginTop: '28px',
                  }}
                >
                  Hledáte spolehlivého drone pilota pro natáčení? Pošlete
                  stručné zadání a ozvu se s vhodným řešením pro váš projekt.
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-14 flex flex-col gap-4">
                <div
                  style={{
                    width: '32px',
                    height: '1px',
                    background: 'rgba(255,255,255,0.12)',
                    marginBottom: '4px',
                  }}
                />

                <a
                  href="mailto:doubrava@ceskasluzba.info"
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.6vw, 32px)',
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#CBFF00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                >
                  doubrava@ceskasluzba.info
                </a>

                <a
                  href="tel:+420774486662"
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.6vw, 32px)',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#CBFF00')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  +420 774 486 662
                </a>

                <div className="flex flex-wrap gap-6 mt-3">
                  <SocialLink href="https://www.instagram.com/filipdoubrava.cz/" label="Instagram" />
                  <SocialLink href="https://www.youtube.com/@filipdoubrava" label="YouTube" />
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="col-span-12 md:col-span-7"
            >
              {sent ? (
                <div
                  className="relative h-full flex flex-col items-start justify-center rounded-[18px] p-10"
                  style={{
                    background: '#0a0a0a',
                    border: '1px solid rgba(255,255,255,0.06)',
                    minHeight: '400px',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1.5px solid #CBFF00',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                    }}
                  >
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6l5 5L15 1" stroke="#CBFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', Impact, sans-serif",
                      fontWeight: 900,
                      fontSize: '40px',
                      color: '#fff',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      margin: '0 0 12px',
                    }}
                  >
                    Zpráva byla odeslána
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.7,
                    }}
                  >
                    Ozvu se vám nejpozději do 48 hodin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    className="relative rounded-[18px] p-8 md:p-10"
                    style={{
                      background: '#0a0a0a',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Jméno a příjmení"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={inputBase}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={inputBase}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                          />
                        </div>
                      </div>

                      {/* Phone (optional) */}
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon (nepovinné)"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputBase}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />

                      {/* Project type */}
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        style={{
                          ...inputBase,
                          color: form.type ? '#fff' : 'rgba(255,255,255,0.35)',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                          paddingRight: '40px',
                          cursor: 'pointer',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      >
                        {PROJECT_TYPES.map(opt => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            style={{ background: '#0a0a0a', color: '#fff' }}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>

                      {/* Message */}
                      <textarea
                        name="message"
                        placeholder="Základ zadání — lokace, termín, typ projektu..."
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        style={{
                          ...inputBase,
                          resize: 'none',
                          lineHeight: 1.65,
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full flex items-center justify-center gap-3 rounded-[10px] transition-all duration-250"
                        style={{
                          padding: '16px 32px',
                          background: '#CBFF00',
                          border: 'none',
                          cursor: sending ? 'default' : 'pointer',
                          opacity: sending ? 0.6 : 1,
                          fontFamily: "'Barlow Condensed', Impact, sans-serif",
                          fontWeight: 800,
                          fontSize: '18px',
                          color: '#000',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                        onMouseEnter={e => { if (!sending) e.currentTarget.style.background = '#d4ff1a'; }}
                        onMouseLeave={e => (e.currentTarget.style.background = '#CBFF00')}
                      >
                        {sending ? 'ODESÍLÁM…' : 'BOOK A SHOOT'}
                        {!sending && (
                          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <path d="M0 5h13M8 1.5l4.5 3.5L8 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>

                      {error && (
                        <p
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '11px',
                            color: '#ff6b6b',
                            textAlign: 'center',
                            lineHeight: 1.5,
                            marginTop: '4px',
                          }}
                        >
                          Něco se nepovedlo. Zkuste to znovu nebo pište přímo na e-mail.
                        </p>
                      )}

                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          color: 'rgba(255,255,255,0.22)',
                          textAlign: 'center',
                          lineHeight: 1.5,
                          marginTop: '4px',
                        }}
                      >
                        Odpovídám obvykle do 48 hodin. Bez spamu, jen k věci.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '24px 0',
          }}
        >
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span
              style={{
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontWeight: 900,
                fontSize: '13px',
                color: 'rgba(255,255,255,0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              FILIP DOUBRAVA
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.18)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              © {new Date().getFullYear()} — Drone pilot & filmmaker
            </span>
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  color: '#CBFF00',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                CZ
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px' }}>/</span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.22)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                }}
              >
                EN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
