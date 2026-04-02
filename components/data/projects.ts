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
      "Front-end engineer in a cross-functional team. Contributed to the Next.js architecture with SSR setup and REST integrations. Implemented Stripe payments, Cloudflare Workers deployment, and adaptive UI using Tailwind CSS to deliver a seamless charity auction experience.",
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
      "Front-end developer contributing to a full-scale ticketing platform for clubs and fans. Worked on the web client and admin panel using Next.js with SSR, RESTful APIs, and Stripe integration. Focused on UX improvements, responsive design, and secure ticket management workflows.",
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
    linkLive: "https://www.skytoolkit.net/",
    description:
      "Led the front-end migration of a streaming platform from legacy React to modern Next.js with SSR. Redesigned architecture, improved performance, and rebuilt UI components to enhance scalability and maintainability.",
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
      "Contributed to a React Native (Expo) application by improving media handling, offline backups, and Mapbox-based geolocation features. Enhanced file persistence, backend synchronization, and overall data reliability in offline mode.",
    tech: ["Expo", "React Native", "Mapbox SDK", "AsyncStorage", "RESTful API"],
  },
  {
    imgMobileSrc: ascendMob,
    description:
      "Front-end developer contributing to a React Native application for airline cabin service. Implemented real-time syncing, Stripe Terminal integration, and a reactive data layer using WatermelonDB and RxJS to support onboard ordering workflows.",
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
