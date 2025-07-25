import { CalendarDays, Clock, MapPin } from 'lucide-react';

interface AboutInfo {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  categories: string[];
  required_skills: string[];
}
const SideBar = ({ about }: { about: AboutInfo }) => {
  return (<aside>
    
      <div className='w-full lg:w-1/4 space-y-6'>
    
        <div className='space-y-4'>
        <h3 className="text-lg text-black font-semibold">About</h3>
          <div className="space-y-3 text-sm text-black">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gray-500" />
              <span className='whitespace-nowrap'>Posted on: {about.posted_on}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>Deadline: {about.deadline}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>Location: {about.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gray-500" />
              <span>Start Date: {about.start_date}</span>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200" />

              <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-black">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                  {about.categories.map((cat, i) => (
                      <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full"
                      >
                      {cat}
                      </span>
                  ))}
                  </div>
              </div>
              <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-black">Required Skills</h3>
                      <div className="flex gap-2">
                      {about.required_skills.map((skill, i) => (
                          <span
                          key={i}
                          className="bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full  whitespace-nowrap"
                          >
                          {skill}
                          </span>
                      ))}
                      </div>
                  </div>
      </div>
  </aside>
  )
}

export default SideBar
