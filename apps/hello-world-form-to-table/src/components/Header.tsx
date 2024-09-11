import React from 'react'

const Header = () => {
  return (
    <header className='mx-auto flex justify-between items-center px-[10vw] py-2 bg-slate-100'>
      <p className='text-4xl text-primary'>Live Coding Session</p>
      <img src='devmojos-logo-header.png' alt='header'/>
    </header>
  )
}

export default Header