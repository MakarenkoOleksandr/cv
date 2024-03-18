import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../props/user";

const ProjectSlide = ({ project }) => (
  <div className={"project__item"}>
    {project.imgDesktopSrc ? (
      <img
        className="project__img desk"
        src={project.imgDesktopSrc}
        alt="desktop"
      />
    ) : null}
    {project.imgMobileSrc ? (
      <img
        className="project__img mob"
        src={project.imgMobileSrc}
        alt="mobile"
      />
    ) : null}
    <div className="project__content">
      <p className="project__head">Description:</p>
      <p className="project__desc">{project.description}</p>
      <p className="project__head">Technologies:</p>
      <p className="project__desc">{project.tech}</p>
      <p className="project__head">Links:</p>
      <div className="project__actions">
        <a className="project__action" href={project.linkCode} target="_blank">
          <FontAwesomeIcon
            icon={faLink}
            style={{ color: "#B0FC83", paddingRight: "30px" }}
          />
          Code
        </a>
        {project.linkLive ? (
          <a
            className="project__action"
            href={project.linkLive}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLink}
              style={{ color: "#B0FC83", paddingRight: "30px" }}
            />
            Web
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {user.Projects.map((el, idx) => (
        <ProjectSlide project={el} key={idx} />
      ))}
    </Slider>
  );
};

export default Projects;
