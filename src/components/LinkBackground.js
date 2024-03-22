import Link from 'next/link'
import React from 'react'

function LinkBackground({title, href="#"}) {
  return (
    <>
        <Link href={href} className="border-2 hover:bg-transparent hover:text-cyan-300 border-cyan-300 rounded-lg  text-black shadow-sm shadow-cyan-300 bg-cyan-300 mr-3 p-2">{title}</Link>
    </>
  )
}

export default LinkBackground