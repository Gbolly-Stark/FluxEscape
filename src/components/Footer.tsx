import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-24 bg-[#050505] text-center flex items-center justify-center">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Flux Escapes. All rights reserved.
      </p>
    </div>
  )
}

export default Footer