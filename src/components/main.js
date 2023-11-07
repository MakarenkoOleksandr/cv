import React, { useState, useEffect } from "react";
import Modal from "./modal";
import Btn from "./btn";
import user from "../props/user";
import btns from "../props/btns";
// import Hamburger from "./hamburger";

const Main = () => {
  const [activeContent, setActiveContent] = useState(btns);
  const [modalActive, setModalActive] = useState(false);

  const handleBtnClick = (clickedContent) => {
    setModalActive(false);
    setTimeout(() => {
      setActiveContent(clickedContent);
      setModalActive(true);
    }, 100);
  };

  useEffect(() => {
    return () => {
      setModalActive(false);
    };
  }, []);

  return (
    <main className="main">
      <div className="main__nav">
        {/* <Hamburger /> */}
        <div className="main__menu">
          <Btn onBtnClick={handleBtnClick} activeContent={activeContent} />
        </div>
        {activeContent && (
          <Modal
            data={user}
            content={activeContent}
            active={modalActive ? "active" : ""}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
