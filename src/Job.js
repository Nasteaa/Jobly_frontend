import React, {useState} from "react";


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
      return ( <button disabled>Applied</button> )
    } else {
      return ( <button onClick={apply}>Apply</button>)
    }
  }

  return (
    <div style={{border: "1px blue solid", "margin-bottom": "5px"}}>
      <h4>{title}</h4>
      {renderCompanyName()}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {renderApplied()}
    </div>
  );
}

export default Job;