import React from 'react'

function ButtonBackground({title}) {
  return (
    <>
        <a href="#" className="border-2 hover:bg-black hover:text-cyan-300 border-cyan-300 rounded-lg  text-black shadow-sm shadow-cyan-300 bg-cyan-300 mr-3 p-2">{title}</a>
    </>
  )
}

export default ButtonBackground