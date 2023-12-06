import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const user = {
  Summary: {
    Info: "Looking for a full-time job as a trainee/junior front-end developer. I had done below training courses at Hillel IT School.",
    Cert: [
      {
        Link: "https://certificate.ithillel.ua/view/60742632",
        LinkInfo: "Front - end Basic(HTMLCSS) - 3 months",
      },
      {
        Link: "https://certificate.ithillel.ua/view/17167089",
        LinkInfo: "Frond-end Pro (JavaScript) - 7 months",
      },
    ],
  },
  About:
    "I'm rather sociable and outgoing. Coding becomes as a part of my life couse i wanted from children time work in this rea. This one gives me a very big pleasuse when i can see a good result of my work. At free of this time i like to play tennis or work with wood. Fast-learner and critical-thinker with a flexible approach to life.",
  Skills: [
    "HTML",
    "CSS",
    "SSAS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "Python",
    "GitHub",
    "Photoshop",
    "CorelDraw",
  ],
  Frameworks: ["React", "Redux", "JQuery", "NodeJS"],
  Languages: ["English – B2", "Ukrainian – Native", "Russian – Native"],
  Projects: [
    <a
      href="https://makarenkooleksandr.github.io/Lokalise/"
      target="_blank"
      rel="noopener noreferrer"
    >
      My first project
    </a>,
    <a
      href="https://makarenkooleksandr.github.io/final/"
      target="_blank"
      rel="noopener noreferrer"
    >
      This project looked by my opinion not much hard. First time I have to use
      JS in first section after header. At 992px breakpoint became a problem in
      case of different height of carousel blocks.
    </a>,
    <a
      href="https://makarenkooleksandr.github.io/bootstrap/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Training to use bootstrap library."
    </a>,
    <a
      href="https://github.com/MakarenkoOleksandr/1inch"
      target="_blank"
      rel="noopener noreferrer"
    >
      This project is first time codding using Python. The most big problem I
      have at option “Check balance”. Response of current wallet balance was
      around 3-4 min. To fix this instead of asyncio library I had to use
      aiohttp. After this I receive response maximum in 1.5 min. Include that
      app checking more that 200 tokens balance at my wallet I am more that
      happy with this result",
    </a>,
    <a
      href="https://makarenkooleksandr.github.io/cv/"
      target="_blank"
      rel="noopener noreferrer"
    >
      This cv
    </a>,
    <a
      href="https://github.com/MakarenkoOleksandr/green-area"
      target="_blank"
      rel="noopener noreferrer"
    >
      My first experience with creatin Telegram Bot.
    </a>,
    <a
      href="https://github.com/MakarenkoOleksandr/mark-map"
      target="_blank"
      rel="noopener noreferrer"
    >
      Freelance project. Client required update shop`s plan with current
      companies. This project not yet released that`s why i provided only JS
      file with code.
    </a>,
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
