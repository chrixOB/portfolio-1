import React from 'react'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function ProjectCard({ title, description, type, link }) {

  return (
    <div className='bg-gray-800 h-[40vh] lg:h-[35vh] rounded-lg'>
      <div className="relative overflow-hidden w-full h-full">
        {type === "Mobile app" ? (
          <Image
            src="/images/profile.jpg"
            alt={title}
            className="object-cover rounded-lg w-full h-full transition-opacity duration-300 hover:opacity-75 animate-pulse"
            width={100}
            height={100}
          />
        ) : (
          <iframe
            src={link}
            className="w-full h-full rounded-lg"
            title={title}
            frameBorder="0"
          ></iframe>
        )}
        <div className="bg-gradient-to-t rounded-lg from-cyan-800 to-cyan-50 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300">
          <div className='text-center'>
            <h1 className="text-white-100 text-xl px-3 font-bold line-clamp-1">{title}</h1>
            <p className='line-clamp-3 px-3'>{description}</p>
            <div className='flex justify-center mt-3 cursor-pointer'>
              <Link href={link} className='p-2 bg-gray-500 rounded-full'>
                <ArrowTopRightOnSquareIcon className='h-5 w-5 text-black' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
