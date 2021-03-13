import React, { useState } from "react";
import { Button } from "reactstrap";
import useSound from 'use-sound';
import sound from './music/Pop.mp3';
import './Job.css'

function Job({ id, title, salary, equity, companyName, hasApplied, handleApply }) {

  let [play, { stop }] = useSound(sound, { volume: 0.3 });
  let [isHovering, setIsHovering] = useState(false);

  const [applied, setApplied] = useState(hasApplied);

  function renderCompanyName() {
    if (companyName) {
      return <p>{companyName}</p>
    }
  }

  function apply() {
    handleApply(id);
    setApplied(true);
  }

  function renderApplied() {
    if (applied) {
      return (<Button className="app-btn" disabled>Applied</Button>)
    } else {
      return (<Button className="app-btn" onClick={apply}>Apply</Button>)
    }
  }

  return (
    <div>
      <div className="job-container hvr-grow"
        style={{ border: "black 1px solid", "margin-bottom": "5px" }}
        onMouseEnter={() => {
          setIsHovering(true);
          play();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          stop();
        }}
        isHovering={isHovering}
      >
        <h4>{title}</h4>
        {renderCompanyName()}
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
        {renderApplied()}
      </div>
    </div>
  );
}

export default Job;