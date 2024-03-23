import React, { useState } from 'react'
import LinkBackground from './LinkBackground'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

function ProjectCard({title, description}) {

  return (
    <div className='bg-gray-800 h-[50vh] lg:h-[35vh] rounded-lg'>
        <div className="relative overflow-hidden w-full h-full">
        <Image
          src="/images/profile.jpg"
          alt="Project Image Sample"
          className="object-cover rounded-lg w-full h-full transition-opacity duration-300 hover:opacity-75 animate-pulse"
          width={100}
          height={100}
        />
        <div className="bg-gradient-to-t rounded-lg from-cyan-800 to-cyan-50 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300">
          <div className='text-center'>
            <h1 className="text-white-100 z-0 text-xl font-bold ">{title}</h1>
            <p>{description}</p>
            <div className='flex justify-center mt-3 cursor-pointer'>
              <button className='p-2 bg-gray-500 rounded-full'>
                <ArrowTopRightOnSquareIcon className='h-5 w-5 text-black'/>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard