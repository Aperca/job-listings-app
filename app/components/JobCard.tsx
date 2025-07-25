'use client'
import Link from 'next/link'
type jobProps = { 
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    image: string;
    categories?: string[];
}
const JobCard = ({id,title,company,location,description,image,categories}:jobProps) => {
  return (


    <Link href={`/job/${id}`} passHref>
        <div className="bg-white border rounded-lg shadow-md hover:shadow-xl transition cursor-pointer flex gap-4">
          <img src={image} alt={company} className="w-16 h-16 rounded-full object-cover" />
          <div className="flex flex-col">
            <h2 className="text-xl text-black font-bold">{title}</h2>
            <p className="text-sm text-gray-600">{company}.{location}</p>
            <p className="text-sm text-gray-700 mt-1">{description}</p>
            <div className="flex gap-2 text-xs mt-2 mb-4">
                {categories?.map((cat) =>(
                    <span key={cat} className="bg-blue-300     text-black rounded px-2 py-1">{cat}</span>
                ))}
            </div>
          </div>
        
        </div>
    </Link>
  )
}

export default JobCard
