import { CiDollar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const FeaJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border border-b-slate-600 rounded-md p-3">
      <img src={logo} alt="logo" />
      <p className="text-2xl text-left font-bold">{job_title}</p>
      <h2 className="text-left my-3">{company_name}</h2>
      <div className="flex gap-4">
        <button className="border px-2">{remote_or_onsite}</button>
        <button className="border px-2">{job_type}</button>
      </div>
      <div className="flex gap-10 my-3">
        <h2 className="flex items-center gap-1">
          <FaLocationDot></FaLocationDot>
          {location}
        </h2>
        <h2 className="flex items-center gap-1">
          <CiDollar></CiDollar>
          {salary}
        </h2>
      </div>
      <button className="btn btn-primary">View Details</button>
    </div>
  );
};

export default FeaJob;
