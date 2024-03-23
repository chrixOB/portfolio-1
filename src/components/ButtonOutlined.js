import React from 'react'

function ButtonOutlined({title, onPress}) {
  return (
    <>
        <button onClick={() => {onPress()}} className="border-2 hover:bg-cyan-300 hover:text-black border-cyan-300 text-cyan-300 rounded-lg p-2">{title}</button>
    </>
  )
}

export default ButtonOutlined