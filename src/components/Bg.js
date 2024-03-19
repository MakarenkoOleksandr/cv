import bg from "../img/bg.mp4";

const Bg = () => {
  return (
    <video
      className="bg"
      width="100%"
      height="100%"
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
