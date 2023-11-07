const Modal = ({ data, content, active }) => {
  return (
    <div className={`main__modal ${active}`}>
      {active && (
        <>
          <h2 className="main__modal-header">{content}</h2>
          <div className={`main__modal-content main__modal-content_${content}`}>
            {data[content].map((item, index) => (
              <p className="main__modal-desc" key={index}>
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Modal;
