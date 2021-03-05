import React, {useEffect, useState} from "react";
import JoblyApi from "./api";
import Company from "./Company";
import { Button, Form, Input } from "reactstrap";
import "./CompanyList.css";

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
    <div className="content">
      <div className="form-container">
      <Form inline className="content-form" onSubmit={handleSubmit}>
        <Input xs="6" sm="6" lg="6" className="w-50" name="query" onChange={ handleChange } value={ formData.query } placeholder="Enter search term" bsSize="lg"/>
        <Button className="content-btn" type="submit">Search</Button>
      </Form>
      </div>
      { renderCompanies() }
    </div>
  );
}

export default CompanyList;


// xs="12" sm="12" lg="12"
// xs="6" sm="6" lg="6"