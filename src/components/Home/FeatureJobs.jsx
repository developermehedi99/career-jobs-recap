import React, { useEffect, useState } from "react";
import FeaJob from "./FeaJob";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(4);

  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center mb-10">
      <h1 className="text-5xl">Features jobs:{jobs.length}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quae!
      </p>
      <div className="grid grid-cols-2 gap-10 mt-6">
        {jobs.slice(0, showAll).map((job) => (
          <FeaJob key={job.id} job={job}></FeaJob>
        ))}
      </div>
      <div className={showAll === jobs.length && "hidden"}>
        <button
          onClick={() => setShowAll(jobs.length)}
          className="btn btn-success mt-10"
        >
          Show all jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
