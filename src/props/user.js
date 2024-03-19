import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import lokaliseDesk from "../img/lokalise-desk.svg";
import lokaliseMob from "../img/lokalise-mob.svg";
import finalDesk from "../img/final-desk.svg";
import finalMob from "../img/final-mob.svg";
import inchDesk from "../img/inch-desk.svg";
import cvMob from "../img/cv-mob.svg";
import cvDesk from "../img/cv-desk.svg";
import tgMob from "../img/tg-mob.svg";
import tgDesk from "../img/tg-desk.svg";
import markMob from "../img/mark-mob.svg";
import markDesk from "../img/mark-desk.svg";
import webAppDesk from "../img/webapp-desk.svg";
import webAppMob from "../img/webapp-mob.svg";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

const user = {
  Summary: {
    Info: "Looking for a full-time job as a trainee/junior front-end developer. I had done below training courses at Hillel IT School.",
    Cert: [
      {
        Link: "https://certificate.ithillel.ua/view/60742632",
        LinkInfo: "Front-end HTML/CSS",
      },
      {
        Link: "https://certificate.ithillel.ua/view/17167089",
        LinkInfo: "Front-end JS",
      },
      {
        Link: "https://barcelonacodeschool.com/files/certs/certificate_oleksandr_makarenko.pdf",
        LinkInfo: "Full Stack Developer",
      },
    ],
  },
  About:
    "I'm rather sociable and outgoing. Becoming a coder was my childhood dream which is now a reality. I find a pleasure in seeing the results of my work. At my free time I enjoy playing tennis and woodworking. I am a fast-learner and critical-thinker with a flexible approach to life.",
  Skills: [
    "HTML",
    "CSS",
    "SSAS",
    "Bootstrap",
    "JavaScript",
    "MongoDB",
    "React",
    "Express",
    "NodeJS",
    "Python",
    "Adb Illustrator",
    "Git",
  ],
  Languages: ["English – B2", "Ukrainian – Native", "Russian – Native"],
  Projects: [
    {
      imgDesktopSrc: markDesk,
      imgMobileSrc: markMob,
      linkLive: "https://mark-lviv.com.ua/uk/shema_tts/?activeFloor=1",
      linkCode: "https://github.com/MakarenkoOleksandr/green-area",
      description:
        "Freelance project. Client required update shop`s plan with current companies.",
      tech: "JS/PHP/MySQL",
    },
    {
      imgDesktopSrc: webAppDesk,
      imgMobileSrc: webAppMob,
      linkLive: "https://lemon-gorilla-slip.cyclic.app/",
      linkCode: "https://github.com/MakarenkoOleksandr/app",
      description:
        "First full stack project. I used Cyclic service for deployment.",
      tech: "Tech: React/Express/Mongo",
    },
    {
      imgMobileSrc: webAppMob,
      linkCode: "https://github.com/MakarenkoOleksandr/native_app/settings",
      description: "First React Native project.",
      tech: "Tech: React Native/Express/Mongo",
    },
    {
      imgDesktopSrc: lokaliseDesk,
      imgMobileSrc: lokaliseMob,
      linkLive: "https://makarenkooleksandr.github.io/Lokalise/",
      linkCode: "https://github.com/MakarenkoOleksandr/Lokalise",
      description:
        "This is my first clone project. Please keep in mind that the links are not added on purpose.",
      tech: "HTML/SCSS/JS.",
    },
    {
      imgDesktopSrc: finalDesk,
      imgMobileSrc: finalMob,
      linkLive: "https://makarenkooleksandr.github.io/final/",
      linkCode: "https://github.com/MakarenkoOleksandr/final",
      description: "This is final clone project at HTML/CSS course",
      tech: "HTML/SCSS/JS/Gulp.",
    },
    {
      imgDesktopSrc: inchDesk,
      linkCode: "https://github.com/MakarenkoOleksandr/1inch",
      description:
        "The biggest problem I've had in this project was `Check balance` option, with response time of balance being around 3-4 min. To fix this instead of asyncio library I used aiohttp, which reduced the response time to 1.5 min maximum.",
      tech: "Python/Web3/aiohttp",
    },
    {
      imgDesktopSrc: cvDesk,
      imgMobileSrc: cvMob,
      linkLive: "https://makarenkooleksandr.github.io/cv/",
      linkCode: "https://github.com/MakarenkoOleksandr/cv",
      description: "This cv",
      tech: "SCSS/React/Gulp/GH Pages",
    },
    {
      imgDesktopSrc: tgDesk,
      imgMobileSrc: tgMob,
      linkCode: "https://github.com/MakarenkoOleksandr/green-area",
      description: "My first experience with creating Telegram Bot.",
      tech: "JS/Telegraf",
    },
  ],
  Contacts: {
    mobile: {
      link: "tel:+1234567890",
      icon: (
        <FontAwesomeIcon
          icon={faPhoneFlip}
          style={{ color: "#B0FC83" }}
          size="2xl"
        />
      ),
    },
    mail: {
      link: "mailto:majop11111@gmail.com",
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ color: "#B0FC83" }}
          size="2xl"
        />
      ),
    },
    tg: {
      link: "https://t.me/Sm911",
      icon: (
        <FontAwesomeIcon
          icon={faTelegram}
          style={{ color: "#B0FC83" }}
          size="2xl"
        />
      ),
    },
    watssup: {
      link: "https://wa.me/+34604469813",
      icon: (
        <FontAwesomeIcon
          icon={faSquareWhatsapp}
          style={{ color: "#B0FC83" }}
          size="2xl"
        />
      ),
    },
    in: {
      link: "https://www.linkedin.com/in/oleksandr-makarenko-8a15b8245/",
      icon: (
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#B0FC83" }}
          size="2xl"
        />
      ),
    },
  },
};
export default user;
