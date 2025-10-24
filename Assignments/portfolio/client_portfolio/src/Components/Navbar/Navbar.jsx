import React, { useState } from 'react'  

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full bg-transparent backdrop-blur-md z-50 min-h-[100px] text-[#f8fafc] flex items-center justify-around transition-all duration-300'>
      <div className='text-white text-2xl lg:text-3xl'>
        Subhransu Sekhar Rout
      </div>

      {/* Desktop View */}
      <div className='hidden md:flex gap-15'>
        <a href="#home" className='hover:text-sky-400 text-xl'>Home</a>
        <a href="#about" className='hover:text-sky-400 text-xl'>About</a>
        <a href="#projects" className='hover:text-sky-400 text-xl'>Projects</a>
        <a href="#contact" className='hover:text-sky-400 text-xl'>Contacts</a>
      </div>

      {/* Mobile Menu Button */}
      <button
      onClick={() => setIsOpen(!isOpen)}
      className='md:hidden text-white text-2xl focus:outline-none'
      >
        {isOpen ? "x" : "≡" }
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 w-full md:hidden bg-slate-900/95 text-white flex flex-col space-y-6 py-6 items-center gap-20'>
          <a href="#home" onClick={() => setIsOpen(false)}
          >Home</a>

          <a href="#about" onClick={() => setIsOpen(false)}
          >About</a>

          <a href="#projects" onClick={() => setIsOpen(false)}
          >Projects</a>

          <a href="#contact" onClick={() => setIsOpen(false)}
          >Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar