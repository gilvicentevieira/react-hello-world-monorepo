const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 py-2 lg:px-[10vw] bg-slate-300'>
      <div className='w-[45%]'>
        <p className='text-primary text-2xl md:text-3xl lg:text-4xl text-center'>Live Coding Session</p>
      </div>
      <div className='w-[45%] flex justify-center'>
        <img src='devmojos-logo-header.png' alt='header' />
      </div>
    </header>
  )
}

export default Header