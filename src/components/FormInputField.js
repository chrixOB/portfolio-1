import React from 'react'

function FormInputField({dataType, placeholder}) {
  return (
    <>
        <input type={dataType} placeholder={placeholder} className={`focus:outline-none p-2 shadow-sm shadow-cyan-600 rounded-md bg-gray-800 text-white ${""}`}/>
    </>
  )
}

export default FormInputField