import JobCard from "./components/JobCard";
import { job_postings } from "./data/jobs";
export default function Home() {
  return (
    
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl m-6 ml-5 text-black">Job Opportunities</h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 mb-4 gap-2">
      <div className="text-black text-sm">
        Showing <strong>{job_postings.length}</strong> results
      </div>
      <div className="flex items-center gap-2 text-sm text-black">
        <span className="">Sort by:</span>
        <select className="border border-black rounded-md px-2 py-1 text-sm">
          <option value="relevant">Most Relevant</option>
          <option value="recent">Most Recent</option>
          <option value="company">Company</option>
        </select>
      </div>
    </div>


    <div className="w-full lg:w-[70%] ml-0 lg:ml-[5%] flex flex-col gap-8">
        {job_postings.map((job,index) =>(
          <JobCard key={job.id} id= {job.id} title={job.title}   company={job.company}location={job.about.location}description={job.description}image={job.image} categories={job.about?.categories}/>
        ))}
      </div>
    </div>
  );
}
