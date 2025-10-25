import React from "react";

const Bg = () => {
  const bg = "../assets/bg.mp4";

  return (
    <video
      className="h-screen w-screen object-cover fixed inset-0"
      width="100%"
      height={"100%"}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={bg} type="video/mp4"></source>
    </video>
  );
};

export default Bg;
