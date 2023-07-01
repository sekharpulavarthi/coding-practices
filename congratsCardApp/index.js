const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>

    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />

      <h1> Kiran V</h1>

      <p>
        Vishnu Institute of computer and education Technology <br /> Bhimavaram{" "}
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png "
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
