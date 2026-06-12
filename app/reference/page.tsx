import type { Metadata } from 'next';
import Nav from '@/app/components/nav';
import PageHeader from '@/app/components/reference/page-header';
import ReferenceContent from '@/app/components/reference/reference-content';
import ClientListSection from '@/app/components/reference/client-list-section';

export const metadata: Metadata = {
  title: 'Reference — Filip Doubrava',
  description:
    'Vybrané práce a finální výstupy. Každý projekt vede přímo na finální video.',
};

export default function ReferencePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050505',
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Nav />
      <main style={{ paddingTop: '64px' }}>
        <PageHeader />
        <ReferenceContent />
        <ClientListSection />
      </main>
    </div>
  );
}
