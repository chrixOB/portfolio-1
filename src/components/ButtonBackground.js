import React from 'react'

function ButtonBackground({title, onPress}) {
  return (
    <>
        <button className="border-2 hover:bg-transparent hover:text-cyan-300 border-cyan-300 rounded-lg  text-black shadow-sm shadow-cyan-300 bg-cyan-300 mr-3 p-2">{title}</button>
    </>
  )
}

export default ButtonBackground