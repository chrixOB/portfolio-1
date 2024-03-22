import React from 'react'
import LinkBackground from './LinkBackground'

function ProjectCard({title, description}) {
  return (
    <div className='bg-gray-800 text-center min-h-fit p-5 lg:min-h-[30vh] rounded-lg'>
        
        <div className='w-full'>
            <h1 className='text-lg font-bold py-2'>{title}</h1>
        </div>
        <div className='py-2 text-sm'>
            <p>{description}</p>
        </div>
        <div className='py-5'>
            <LinkBackground href='#About' title={'Read More'} onPress={()=>alert('Go and learn!!!')}/>
        </div>
    </div>
  )
}

export default ProjectCard