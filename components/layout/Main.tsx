import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="relative z-10 mt-[120px] px-10">{children}</main>;
};

export default Main;
