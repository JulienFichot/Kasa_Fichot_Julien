import React from "react";
import "./Banniere.css";

function Banniere({ image, texte }) {
  return (
    <div className="banniere">
      <img className="banniere-img" src={image} alt="Bannière" />
      <div className="banniere-sombre"></div>
      <div className="banniere-box-txt">
        <span className="banniere-txt">{texte}</span>
      </div>
    </div>
  );
}

export default Banniere;
