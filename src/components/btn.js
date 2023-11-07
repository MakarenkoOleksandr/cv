import React from "react";
import btns from "../props/btns";

const Btn = ({ onBtnClick, activeContent }) => {
  return (
    <>
      {btns.map((content, index) => (
        <button
          className={`main__nav-open_modal ${
            content === activeContent ? "active" : ""
          }`}
          key={index}
          onClick={() => onBtnClick(content)}
        >
          {content}
        </button>
      ))}
    </>
  );
};

export default Btn;
