import React, {useEffect, useState} from "react";
import {useEffect} from "react-router-dom";
import JoblyApi from "./api";

function CompanyTest() {

  let initialSetState = { query: "" };
  const [formData, setFormData] = useState(initialSetState);
  const [companies, setCompanies] = useState();

  useEffect(function getCompaniesOnMount() {
    async function getCompanies() {
      let res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    getCompanies()
  }, []); 

  function handleChange(evt) {
    const {name, value} = evt.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    let queryParams = {
      name: formData.query
    }
    let res = await JoblyApi.getCompanies(queryParams);
    setCompanies(res);
    setFormData(initialSetState);
  }

  return (
    <div>
      <form onClick={handleSubmit}>
        <input name="query" onChange={handleChange} value={formData.query} placeholder="Enter Search Term" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}