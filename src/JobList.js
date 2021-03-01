import React, { useEffect, useState, useContext } from "react";
import JoblyApi from "./api";
import Job from "./Job";

import UserContext from "./UserContext";

function JobList({handleApply}) {
  const currentUser = useContext(UserContext);

  let initialFormState = { query: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobsOnMount() {
    async function getJobs() {
      let res = await JoblyApi.getJobs();
      setJobs(res);
    }
    getJobs();
  }, [])

  async function handleSubmit(evt) {
    evt.preventDefault();
    let queryParams = {
      title: formData.query
    }
    let res = await JoblyApi.getJobs(queryParams);
    setJobs(res);
    setFormData(initialFormState);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  function renderJobs() {
    if (currentUser.username) {
      const appliedJobIds = currentUser.applications.map(id => id); // O(N)
      // Supoose you have M jobs and N applied jobs
      // O(M*N)
      // O(M)
      // O(M) + O(N)
      return jobs.map(job => (
        <Job id={job.id} title={job.title} companyName={job.companyName} salary={job.salary} equity={job.equity} 
        hasApplied={appliedJobIds.includes(job.id)} handleApply={handleApply}/>
      ))
    }
  }



  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input name="query" onChange={ handleChange } value={ formData.query } placeholder="Enter search term"/>
      <button type="submit">Search</button>
    </form>
    { renderJobs() }
  </div>
  );
}

export default JobList;