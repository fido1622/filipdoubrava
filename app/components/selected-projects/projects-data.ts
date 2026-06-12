export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  videoObjectPosition?: string;
}

export const projects: Project[] = [
  {
    id: '01',
    number: '01',
    category: 'PROMO',
    title: 'REKLAMY',
    description:
      'Krátké i delší formáty, kde dron doplňuje hlavní kameru a pomáhá vyprávět příběh značky z jiného úhlu.',
    imageSrc: '/images/visa.png',
    videoSrc: '/images/visa.webm',
  },
  {
    id: '02',
    number: '02',
    category: 'EVENT',
    title: 'BROADCAST / SPORT',
    description:
      'Dynamické FPV průlety, sledování sportovců a akce v reálném čase pro televizi i online přenosy.',
    imageSrc: '/images/pardubicka.png',
    videoSrc: '/images/broadcst1.webm',
  },
  {
    id: '03',
    number: '03',
    category: 'DOCUMENTARY',
    title: 'EVENTY',
    description:
      'Atmosférické záběry z koncertů, festivalů a firemních akcí, které zachytí měřítko, energii i klíčové momenty.',
    imageSrc: '/images/lir.png',
    videoSrc: '/images/lir.webm',
  },
  {
    id: '04',
    number: '04',
    category: 'CORPORATE',
    title: 'NEMOVITOSTI',
    description:
      'Čisté, stabilní záběry exteriéru a průlety interiéru i okolí, které zvýrazní architekturu, lokalitu a kontext nemovitosti.',
    imageSrc: '/images/harrachov.jpg',
  },
  {
    id: '05',
    number: '05',
    category: 'TRAVEL',
    title: 'PRŮMYSL',
    description:
      'Přehledové i detailní záběry továren, skladů a technologií pro prezentace, nábor, bezpečnost i interní komunikaci.',
    imageSrc: '/images/hero-woman-portrait.jpg',
  },
];
