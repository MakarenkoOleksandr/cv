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

const user = {
  Summary: {
    Info: "Looking for a full-time job as a trainee/junior front-end developer. I had done below training courses at Hillel IT School.",
    Cert: [
      {
        Link: "https://certificate.ithillel.ua/view/60742632",
        LinkInfo: "Front - end HTML/CSS",
      },
      {
        Link: "https://certificate.ithillel.ua/view/17167089",
        LinkInfo: "Frond-end JS",
      },
      {
        Link: "https://barcelonacodeschool.com/files/certs/certificate_oleksandr_makarenko.pdf",
        LinkInfo: "Full Stack Developer",
      },
    ],
  },
  About:
    "I'm rather sociable and outgoing. Coding becomes as a part of my life couse i wanted from children time work in this area. This one gives me a very big pleasuse when i can see a good result of my work. At free of this time i like to play tennis or work with wood. Fast-learner and critical-thinker with a flexible approach to life.",
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
      imgDesktopSrc: lokaliseDesk,
      imgMobileSrc: lokaliseMob,
      linkLive: "https://makarenkooleksandr.github.io/Lokalise/",
      linkCode: "https://github.com/MakarenkoOleksandr/Lokalise",
      description:
        "This is my first clone project. Please have be noticed that links are not settuped. ",
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
        "The most big problem I have at option “Check balance”. Response of balance was around 3-4 min. To fix this instead of asyncio library I had to use aiohttp. After one I received response maximum in 1.5 min",
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
      description: "My first experience with creatin Telegram Bot.",
      tech: "JS/Telegraf",
    },
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
  ],
  Contacts: [
    <a href="https://t.me/Sm911" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTelegram} style={{ color: "white" }} />
    </a>,
    <a
      href="https://wa.me/+380961550556"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faSquareWhatsapp} style={{ color: "white" }} />
    </a>,
    <a
      href="https://www.linkedin.com/in/oleksandr-makarenko-8a15b8245/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
    </a>,
    <a
      href="mailto:majop11111@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
    </a>,
  ],
};
export default user;
