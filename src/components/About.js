import user from "../props/user";

const About = () => {
  return (
    <div className="wrap">
      <div className="about">
        <p className="about__name">
          Hello! My name is Alex and I`m from Ukraine.
        </p>
        <p className="about__content">{user.About}</p>
        <p className="about__name">Languages:</p>
        {user.Languages.map((el, idx) => (
          <p className="about__content" key={idx}>
            {el}
          </p>
        ))}
      </div>
      ;
    </div>
  );
};

export default About;
