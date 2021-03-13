import React, { useState } from "react";
import useSound from 'use-sound';
import { Link } from "react-router-dom"
import sound from './music/Pop.mp3';
import './CompanyList.css';


function Company({company}) {
  let [play, { stop }] = useSound(sound,{ volume: 0.3 });
  let [isHovering, setIsHovering] = useState(false);

  return (
    <Link to={`/companies/${company.handle}`}
      onMouseEnter={() => { 
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}>
      <div className="company-container hvr-grow" 
        style={{border: "black 1px solid", "margin-bottom": "5px"}}
        isHovering={isHovering}>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}


export default Company;