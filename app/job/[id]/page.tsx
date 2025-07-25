import { job_postings } from "@/app/data/jobs"
import { Sidebar } from "lucide-react";
import { notFound } from "next/navigation"
import SideBar from "@/app/components/SideBar";
import { MapPin } from "lucide-react";

interface Props{
    params: {
        id: string;
    }
}
const jobDetail = ({params}: Props) => {
    const job = job_postings.find((job) => job.id === parseInt(params.id))
    if (!job) return notFound();

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 py-8 max-w-7xl mx-auto">
        <main className="flex-1">
          <div className='space-y-8'>
            <div>
              <h2 className='font-bold text-black text-xl mb-2'>Description</h2>
              <p className='text-gray-700 text-sm'>{job.description}</p>
            </div>
          <div>
              <h2 className="text-xl font-bold text-black mb-2">Responsibilities</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {job.responsibilities.map((res,index) => (
                          <li key={index}>{res}</li>
                      ))}
                  </ul>
          </div>
            <div>
            <h2 className="text-xl font-bold text-black mb-2">Ideal Candidate</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {job.ideal_candidate.traits.map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
              </ul>
            </div>
            <h2 className="text-xl font-bold text-black mb-2">When & Where</h2>
            <div className="flex items-center gap-2 text-black text-sm">
  <MapPin className="h-5 w-5" />
  <p>{job.when_where}</p>
  </div>
          </div>
        </main>
        <aside className="w-full lg:w-1/4">{  <SideBar about={job.about} />}</aside>

    </div>
  )
}

export default jobDetail
