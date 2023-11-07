import user from "./../props/user";
import photo from "./../img/photo.jpg";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__photo">
        <img src={photo} alt="img"></img>
      </div>
      <div className="aside__summary">
        <h2>Summary</h2>
        <p>{user.Summary.Info}</p>
        {user.Summary.Cert.map((item, index) => (
          <a
            key={index}
            href={item.Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.LinkInfo}
          </a>
        ))}
      </div>
      <div className="aside__about">
        <h2>About Me</h2>
        <p>{user.About}</p>
      </div>
      <div className="aside__contacts">
        <h2>Contacts</h2>
        <div className="aside__contacts-wrap">
          {user.Contacts.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </aside>
  );
};
export default Aside;
