import React from 'react'

function SectionTitle({firstText, secondText}) {
  return (
    <div>
        <h1 className='text-[50px]'>{firstText} <span className='text-cyan-300'>{secondText}</span></h1>
    </div>
  )
}

export default SectionTitle