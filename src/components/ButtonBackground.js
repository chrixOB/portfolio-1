import React from 'react'

function ButtonBackground({title, onPress, disabled}) {
  return (
    <>
        <button disabled={disabled} className={`hover:bg-transparent  ${disabled ? 'border-2 hover:bg-none border-cyan-300 text-cyan-500' : 'bg-cyan-300 hover:text-cyan-300 border-2 text-black border-cyan-300 shadow-cyan-300  shadow-sm'} rounded-lg mr-3 p-2`}>{title}</button>
    </>
  )
}

export default ButtonBackground