import Link from 'next/link'
import React from 'react'

function Logo({rightTextColor = "text-blue-400"}) {
  return (
    <Link href={'#'} className={`text-[20px] ${rightTextColor}`}><small className='text-yellow-400'>Port</small>folio</Link>
  )
}

export default Logo