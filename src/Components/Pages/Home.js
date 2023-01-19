import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Notes() {
  return (
    <div className="note">
      <h1>Crop Recommendation System</h1>
      <p>
        This sytem will be able to predict<br/> the crop to grow on your farm as a
        farmer.
      </p>

      <Link to="/crop">
        <div className="home-btn">PREDICT</div>
      </Link>
    </div>
  );
}
export default Notes;
