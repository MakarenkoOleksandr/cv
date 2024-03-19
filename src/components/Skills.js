import user from "../props/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  return (
    <div className="wrap">
      <div className="skills__wrap">
        <div className="skills__skills">
          {user.Skills.map((el, idx) => (
            <>
              <FontAwesomeIcon
                className="skills__img filled"
                icon={faSquareCheck}
                style={{
                  color: "transparent",
                  animationDelay: `${idx * 0.35}s`,
                }}
              />
              <p className="skills__item" key={idx}>
                {el}
              </p>
            </>
          ))}
        </div>
        <p className="skills__name"> Certificates:</p>
        <div className="skills__certificates">
          {user.Summary.Cert.map((el, idx) => (
            <>
              <p className="cert filled" key={idx}>
                - {el.LinkInfo}
              </p>
              <a
                className="link"
                key={idx}
                href={el.Link}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLink} style={{ color: "#B0FC83" }} />
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
