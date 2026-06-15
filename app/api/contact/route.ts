import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const PROJECT_TYPE_LABELS: Record<string, string> = {
  commercial: 'Komerční reklama',
  sport: 'Sport / Events',
  'real-estate': 'Nemovitosti',
  documentary: 'Dokumentární',
  other: 'Jiný',
};

export async function POST(request: Request) {
  const { name, email, phone, type, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Web Form <web@filipdoubrava.cz>',
      to: 'doubrava@ceskasluzba.info',
      replyTo: email,
      subject: `Nová poptávka — ${name}`,
      text: [
        `Jméno: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone || '—'}`,
        `Typ projektu: ${PROJECT_TYPE_LABELS[type] ?? '—'}`,
        '',
        'Zpráva:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Failed to send contact email', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact email', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
