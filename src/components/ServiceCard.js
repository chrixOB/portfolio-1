import React from 'react'
import LinkBackground from './LinkBackground'

function ServiceCard({iconName, title, description}) {
  return (
    <div className='bg-gray-800 text-center min-h-fit p-5 lg:min-h-[65vh] rounded-lg'>
        <div className='flex justify-center'>
            <span className='h-20 w-20 text-cyan-300'>{iconName}</span>
        </div>
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

export default ServiceCard