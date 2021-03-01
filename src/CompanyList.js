import React, {useEffect, useState} from "react";
import JoblyApi from "./api";

import Company from "./Company";

function CompanyList() {

  let initialFormState = { query: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    async function getCompanies() {
      let res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    getCompanies();
  }, [])

  async function handleSubmit(evt) {
    evt.preventDefault();
    let queryParams = {
      name: formData.query
    }
    let res = await JoblyApi.getCompanies(queryParams);
    setCompanies(res);
    setFormData(initialFormState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  function renderCompanies() {
    return companies.map(company => (
        <Company company={company} />
    ));
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" onChange={ handleChange } value={ formData.query } placeholder="Enter search term"/>
        <button type="submit">Search</button>
      </form>
      { renderCompanies() }
    </div>
  );
}

export default CompanyList;