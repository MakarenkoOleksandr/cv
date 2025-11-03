const markDesk = "/assets/images/mark-desk.svg";
const markMob = "/assets/images/mark-mob.svg";
const angDesk = "/assets/images/ang-desk.svg";
const angMob = "/assets/images/ang-mob.svg";
const tickedyDesk = "/assets/images/tickedy-desk.svg";
const tickedyMob = "/assets/images/tickedy-mob.svg";
const skyDesk = "/assets/images/sky-desk.svg";
const skyMob = "/assets/images/sky-mob.svg";
const tgDesk = "/assets/images/tg-desk.svg";
const tgMob = "/assets/images/tg-mob.svg";
const geoMob = "/assets/images/geodata-mob.svg";
const ascendMob = "/assets/images/ascend-mob.svg";

export interface ProjectProps {
  imgDesktopSrc?: string;
  imgMobileSrc?: string;
  linkLive?: string;
  description?: string;
  tech: string[];
}

export const projects: ProjectProps[] = [
  {
    imgDesktopSrc: markDesk,
    imgMobileSrc: markMob,
    linkLive: "https://mark-lviv.com.ua/uk/shema_tts/?activeFloor=1",
    description:
      "Freelance project. The client requested an updated shop plan with current companies. The entire interactive functionality was implemented in pure JavaScript, and the base map layout was manually adjusted in Adobe Illustrator.",
    tech: ["JS", "PHP", "MySQL"],
  },
  {
    imgDesktopSrc: angDesk,
    imgMobileSrc: angMob,
    linkLive: "https://anoblegift.com",
    description:
      "Developed from scratch — full front-end architecture, SSR setup, and REST integrations on Next.js. Implemented Stripe payments, Cloudflare Workers deployment, and adaptive UI with Tailwind CSS for a seamless charity auction experience.",
    tech: [
      "Next",
      "SSR",
      "RESTful APIs",
      "TypeScript",
      "Cloudflare Workers",
      "Stripe API",
      "Next-Intl",
      "Tailwind",
    ],
  },
  {
    imgDesktopSrc: tickedyDesk,
    imgMobileSrc: tickedyMob,
    linkLive: "https://app.tickedy.com/motherwell",
    description:
      "Built from scratch — complete ticketing platform for clubs and fans. Developed web client and admin panel on Next.js with SSR, RESTful APIs, and Stripe integration. Focused on smooth UX, responsive design, and secure ticket management workflows.",
    tech: [
      "Next",
      "SSR",
      "RESTful APIs",
      "TypeScript",
      "Cloudflare Pages",
      "Stripe API",
      "Tailwind",
    ],
  },
  {
    imgDesktopSrc: skyDesk,
    imgMobileSrc: skyMob,
    linkLive: "https://skyglass-app-rebuild.pages.dev/",
    description:
      "Led a full rebuild of the company’s streaming platform — migrating from legacy React to modern Next.js with SSR. Redesigned front-end architecture, improved performance, and rebuilt UI for a faster, cleaner, and more scalable product.",
    tech: [
      "Next",
      "SSR",
      "RESTful APIs",
      "TypeScript",
      "Cloudflare Pages",
      "Stripe API",
      "Next-Intl",
      "Tailwind",
    ],
  },
  {
    imgDesktopSrc: tgDesk,
    imgMobileSrc: tgMob,
    description: "My first experience with creating Telegram Bot.",
    tech: ["JS", "Telegraf"],
  },
  {
    imgMobileSrc: geoMob,
    description:
      "Contributed to the React Native (Expo) app by improving media file handling, offline backups, and Mapbox-based geolocation features. Added support for file persistence, backend sync, and bug fixes to improve data reliability in offline mode.",
    tech: ["Expo", "React Native", "Mapbox SDK", "AsyncStorage", "RESTful API"],
  },
  {
    imgMobileSrc: ascendMob,
    description:
      "Developed from scratch a React Native app for airline cabin service — enabling passengers to order meals, drinks, and duty-free items. Implemented real-time syncing, Stripe Terminal integration, and reactive data layer with WatermelonDB and RxJS.",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RESTful API",
      "Stripe API",
      "Stripe Terminal",
      "Watermelon DB",
      "RxJS-based reactive store",
    ],
  },
];
