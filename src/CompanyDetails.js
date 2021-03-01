import React, {useEffect, useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";

import UserContext from "./UserContext";
import JoblyApi from "./api"
import Job from "./Job";

function CompanyDetails({handleApply}) {

  const { handle } = useParams();
  const [jobs, setJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const currentUser = useContext(UserContext);

  useEffect(function getJobsOnMount() {
    async function getJobs() {
      let res = await JoblyApi.getCompany(handle);
      setCompanyName(res.name);
      setCompanyDescription(res.description);
      setJobs(res.jobs);
    }
    getJobs();
  }, []);

  function renderJobs() {
    if (currentUser.username) {
      let jobIds = currentUser.applications.map(id => id);
      // Compare to how we do this in JobList.js - it's very similar but just a different style / requires another line of code
      return jobs.map(job => {
        let hasApplied = jobIds.includes(job.id);
        return (<Job id={job.id} title={job.title} salary={job.salary} equity={job.equity} hasApplied={hasApplied} handleApply={handleApply}/>)
      });
    }
  }

  return (
    <div>
    <h3>{companyName}</h3>
    <p>{companyDescription}</p>
    {renderJobs()}
    </div>
  );
}

export default CompanyDetails;