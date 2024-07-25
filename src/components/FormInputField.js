import React from 'react'

function FormInputField({ dataType, name, placeholder, onChange, value, required }) {
  return (
    <input 
      type={dataType} 
      name={name}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      required={required}
      className={`focus:outline-none p-2 shadow-sm shadow-cyan-600 rounded-md bg-gray-800 text-white`}
    />
  )
}

export default FormInputField
