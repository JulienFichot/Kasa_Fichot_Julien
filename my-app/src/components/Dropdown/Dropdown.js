import React, { useState } from "react";
import "./Dropdown.css";
import fleche from "../../assets/img/Components/Dropdown/Fleche.svg";

function Dropdown({ titre, isOpen = false, children }) {
  /* Crée un Hook d'état */
  const [ouvert, setOuvert] = useState(isOpen);

  return (
    <div className="dropdown" id={`dropdown-${titre}`}>
      <div className="header-dropdown">
        <div className="titre-dropdown">{titre}</div>
        <span
          className={`fleche-dropdown ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        ouvert && <div className="description-dropdown">{children}</div>
      }
    </div>
  );
}

export default Dropdown;
