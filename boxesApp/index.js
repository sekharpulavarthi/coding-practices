const Box = (props) => {
  const { className, text, heading } = props;
  return (
    <div className={`card ${className}`}>
      <h1 className={heading}>{text}</h1>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div>
      <h1 className="main-heading">Boxes</h1>
    </div>
    <div className="cards-container">
      <Box className="yellow-box" text="Small" heading="heading1" />
      <Box className="blue-box" text="Medium" heading="heading2" />
      <Box className="pink-box" text="Large" heading="heading3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
