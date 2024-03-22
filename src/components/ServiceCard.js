import React, { useState } from 'react'
import ButtonBackground from './ButtonBackground'

function ServiceCard({iconName, title, description, onPress}) {

    const [isFullText, setIsFullText] = useState(false)

    const showFullText = () => {
        setIsFullText(!isFullText)
    }

  return (
    <div className='bg-gray-800 text-center min-h-fit p-5 lg:min-h-[60vh] rounded-lg'>
        <div className='flex justify-center'>
            <span className='h-20 w-20 text-cyan-300'>{iconName}</span>
        </div>
        <div className='w-full'>
            <h1 className='text-lg font-bold py-2'>{title}</h1>
        </div>
        <div className={`py-2 text-sm  transition-transform duration-500 ease-in-out ${isFullText ? 'translate-y-2 ' : 'translate-y-1'}`}>
            <p>{isFullText ? description : `${description.slice(0, 150)}...`}</p>
        </div>
        <div className='mt-5'>
            <ButtonBackground title={!isFullText ? 'Read More' : 'Read Less'} onPress={() => showFullText()}/>
        </div>
    </div>
  )
}

export default ServiceCard