import { useEffect, useState } from "react";

const Header = () => {
  const [showName, setShowName] = useState(false);
  const [showPosition, setShowPosition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);

    const timer_ = setTimeout(() => {
      setShowPosition(true);
    }, 2000);

    return () => clearTimeout(timer, timer_);
  }, []);
  return (
    <div className="wrap">
      <div className="home__user">
        <p className="home__user-greet">Hello, my name is:</p>

        {showName && <p className="home__user-name">Oleksandr Makarenko,</p>}
        {showPosition && (
          <p className="home__user-position">I`m Front-End Developer</p>
        )}
      </div>
    </div>
  );
};

export default Header;
