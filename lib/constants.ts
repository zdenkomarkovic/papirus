export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://papirustemerin.rs";
export const SITE_NAME = "Papirus Temerin";

export const COMPANY = {
  name: "Papirus STR.",
  fullName: "Papirus STR. komisiona specijalizovana prodavnica",
  address: "Novosadska 365",
  city: "21235 Temerin",
  phone: "063 568 020",
  phone2: "021 842 677",
  email: "papirustemerin@gmail.com",
  workingHours: {
    weekdays: "Pon – Pet: 08:00 – 20:00",
    saturday: "Sub: 08:00 – 16:00",
    sunday: "Ned: zatvoreno",
  },
} as const;

export const SERVICES = [
  {
    id: "3d-stampa",
    title: "3D Štampa",
    description: "Izrada trodimenzionalnih objekata od raznih materijala prema vašem dizajnu ili projektu.",
    image: "/3D štampa.png",
    slug: "3d-stampa",
  },
  {
    id: "fotokopiranje",
    title: "Fotokopiranje",
    description: "Profesionalno fotokopiranje u boji i crno-belom na modernim Konica Minolta uređajima.",
    image: "/koica-minolta C258 color fotokopir.png",
    slug: "fotokopiranje",
  },
  {
    id: "graviranje",
    title: "Graviranje",
    description: "Precizno graviranje na metalu, plastici, drvetu i ostalim materijalima.",
    image: "/graviranje_prev_ui.png",
    slug: "graviranje",
  },
  {
    id: "izrada-kljuceva",
    title: "Izrada ključeva",
    description: "Brza i precizna izrada kopija ključeva svih tipova.",
    image: "/Izrada ključeva.png",
    slug: "izrada-kljuceva",
  },
  {
    id: "lasersko-secenje",
    title: "Lasersko sečenje",
    description: "Lasersko sečenje i graviranje raznih materijala sa visokom preciznošću.",
    image: "/lasersko sečenje i graviranje.png",
    slug: "lasersko-secenje",
  },
  {
    id: "medalje",
    title: "Izrada medalja",
    description: "Izrada personalizovanih medalja za sportska i ostala takmičenja.",
    image: "/medalje.png",
    slug: "medalje",
  },
  {
    id: "pehari",
    title: "Izrada pehara",
    description: "Izrada pehara i nagrada za sve prilike – sportske, kulturne i poslovne.",
    image: "/pehari i medalje.png",
    slug: "pehari",
  },
  {
    id: "pecati",
    title: "Izrada pečata",
    description: "Izrada pečata za firme i privatna lica, svih oblika i veličina.",
    image: "/pečati.png",
    slug: "pecati",
  },
  {
    id: "sublimacijska-stampa",
    title: "Sublimacijska štampa",
    description: "Štampa na tekstilu, šoljama, jastucima i raznim promotivnim materijalima.",
    image: "/sublimacijska štampa.png",
    slug: "sublimacijska-stampa",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/prodavnica", label: "Prodavnica" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;
