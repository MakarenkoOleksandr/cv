import photo from "../img/photo.jpg";
import user from "../props/user";

const Contacts = () => {
  return (
    <div className="contacts">
      <img className="contacts__photo" src={photo} alt="img" />
      <div className="contacts__wrap">
        <a
          className="contacts__link"
          href={user.Contacts.mobile.link}
          target="_blank"
          rel="noreferrer"
        >
          {user.Contacts.mobile.icon}
        </a>
        <a
          className="contacts__link"
          href={user.Contacts.mail.link}
          target="_blank"
          rel="noreferrer"
        >
          {user.Contacts.mail.icon}
        </a>
        <a
          className="contacts__link"
          href={user.Contacts.tg.link}
          target="_blank"
          rel="noreferrer"
        >
          {user.Contacts.tg.icon}
        </a>
        <a
          className="contacts__link"
          href={user.Contacts.watssup.link}
          target="_blank"
          rel="noreferrer"
        >
          {user.Contacts.watssup.icon}
        </a>
        <a
          className="contacts__link"
          href={user.Contacts.in.link}
          target="_blank"
          rel="noreferrer"
        >
          {user.Contacts.in.icon}
        </a>
      </div>
    </div>
  );
};

export default Contacts;
