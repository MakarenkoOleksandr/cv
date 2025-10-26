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
  tech: string;
}

export const projects: ProjectProps[] = [
  {
    imgDesktopSrc: markDesk,
    imgMobileSrc: markMob,
    linkLive: "https://mark-lviv.com.ua/uk/shema_tts/?activeFloor=1",
    description:
      "Freelance project. The client requested an updated shop plan with current companies. The entire interactive functionality was implemented in pure JavaScript, and the base map layout was manually adjusted in Adobe Illustrator.",
    tech: "JS/PHP/MySQL",
  },
  {
    imgDesktopSrc: angDesk,
    imgMobileSrc: angMob,
    linkLive: "https://anoblegift.com",
    description:
      "A Noble Gift is a charity auction platform that connects brands, philanthropists, and fans through exclusive experiences and collectible items — with all proceeds going directly to charitable causes. The platform ensures full transparency, allowing donors to see exactly where their contribution goes. Each campaign combines luxury experiences, entertainment, and purpose-driven giving in one seamless digital experience.",
    tech: "Tech: Next/SSR/RESTful APIs/TypeScript/Cloudflare Pages/Stripe API/Next-Intl/Tailwind",
  },
  {
    imgDesktopSrc: tickedyDesk,
    imgMobileSrc: tickedyMob,
    linkLive: "https://app.tickedy.com/motherwell",
    description:
      "This project provides fans with a modern and intuitive online ticketing system. Users can purchase season passes, single-match tickets, and easily manage family or friend accounts under a single profile. Two versions of the system were developed — a web client for fans and an admin application designed for internal club staff to manage matches, ticket availability, and user accounts. The platform offers a streamlined purchasing process, responsive design, and clear UX for both desktop and mobile users",
    tech: "Tech: Next/SSR/RESTful APIs/TypeScript/Cloudflare Pages/Stripe API/Tailwind",
  },
  {
    imgDesktopSrc: skyDesk,
    imgMobileSrc: skyMob,
    linkLive: "https://skyglass-app-rebuild.pages.dev/",
    description:
      "Sky Toolkit web application — a modernised UI/UX interface built to support the company’s streaming and content-delivery ecosystem. The site represents a foundational revision of the platform’s front-end, emphasising responsive design and streamlined navigation, designed to align with Sky’s group-wide digital-services roadmap",
    tech: "Tech: Next/SSR/RESTful APIs/TypeScript/Cloudflare Pages/Stripe API/Next-Intl/Tailwind",
  },
  {
    imgDesktopSrc: tgDesk,
    imgMobileSrc: tgMob,
    description: "My first experience with creating Telegram Bot.",
    tech: "JS/Telegraf",
  },
  {
    imgMobileSrc: geoMob,
    description:
      "A cross-platform React Native (Expo) application designed for field data collection and geolocation tracking. The app allows users to capture coordinates, upload photos, and manage survey points directly on an interactive Mapbox-based map. Includes offline caching, camera integration, and background geodata syncing for reliable operation in areas with limited connectivity.",
    tech: "Expo/React Native/Mapbox SDK/AsyncStorage/RESTful API",
  },
  {
    imgMobileSrc: ascendMob,
    description:
      "A mobile and tablet-friendly React Native application developed for airline cabin service, enabling passengers and crew to order food, drinks, and duty-free products during flight. The system supports multi-language UI, real-time order tracking, and automatic synchronization with the aircraft’s onboard inventory system. Designed with a focus on usability, low-latency operation, and seamless integration into the airline’s existing backend infrastructure.",
    tech: "React Native/TypeScript/Redux Toolkit/RESTful API/Stripe API/Stripe Terminal/Watermelon/RxJS-based reactive store",
  },
];
