import React, {useState} from "react";
import { Button } from "reactstrap";
import './Job.css'

function Job({id, title, salary, equity, companyName, hasApplied, handleApply}) {

  const [applied, setApplied] = useState(hasApplied);

  function renderCompanyName() {
    if(companyName) {
      return <p>{companyName}</p>
    }
  }

  function apply() {
    handleApply(id);
    setApplied(true);
  }
  
  function renderApplied() {
    if(applied) {
      return ( <Button className="app-btn" disabled>Applied</Button> )
    } else {
      return ( <Button className="app-btn" onClick={apply}>Apply</Button>)
    }
  }

  return (
      <div className="job-container" style={{border: "black 1px solid", "margin-bottom": "5px"}}>
      <h4>{title}</h4>
      {renderCompanyName()}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {renderApplied()}
    </div>
  );
}

export default Job;