import React from "react";
import {Link} from "react-router-dom"
import './CompanyList.css';

function Company({company}) {

  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="company-container" style={{border: "black 1px solid", "margin-bottom": "5px"}}>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}


export default Company;