import { FaLink } from "react-icons/fa";

export const certificates = [
  {
    Link: "https://certificate.ithillel.ua/view/60742632",
    LinkInfo: "Front-end Development (HTML/CSS) — 2-month course",
    icon: (
      <FaLink
        className="cursor-pointer transition-all hover:scale-125"
        size={16}
        color="currentColor"
      />
    ),
    skills: ["HTML", "CSS", "SASS/SCCS", "JS", "GULP"],
  },
  {
    Link: "https://certificate.ithillel.ua/view/17167089",
    LinkInfo: "Advanced Front-end (JavaScript) — 6-month program",
    icon: (
      <FaLink
        className="cursor-pointer transition-all hover:scale-125"
        size={16}
        color="currentColor"
      />
    ),
    skills: ["JS", "Typescript", "React", "Redux"],
  },
  {
    Link: "https://barcelonacodeschool.com/files/certs/certificate_oleksandr_makarenko.pdf",
    LinkInfo: "Full Stack Developer — 2-month express training",
    icon: (
      <FaLink
        className="cursor-pointer transition-all hover:scale-125"
        size={16}
        color="currentColor"
      />
    ),
    skills: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "React Native",
      "Mongo DB",
      "RESTfull APIs",
    ],
  },
];

export const commercial = [
  {
    label: "Bluebox",
    desc: "Full time",
    duration: "July 2024 - Present time",
    icon: (
      <FaLink
        className="cursor-pointer transition-all hover:scale-125"
        size={16}
        color="currentColor"
      />
    ),
    link: "https://www.blueboxonline.com/",
    position: "Front-End developer",
  },
  {
    label: "Mark",
    desc: "Partial time",
    duration: "March 2022 - Present time",
    icon: (
      <FaLink
        className="cursor-pointer transition-all hover:scale-125"
        size={16}
        color="currentColor"
      />
    ),
    link: "https://mark-lviv.com.ua/",
    position: "Front-End Developer (Website Maintenance & Support)",
  },
];
