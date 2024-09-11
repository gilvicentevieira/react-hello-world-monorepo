import { NavLink, useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/contact')
  }

  return (
    <section className="px-[10vw] py-20 flex flex-col items-center gap-8">
      <p className="text-6xl text-primary">Hello World.</p>
      <div className="flex gap-4">
        <NavLink to='/about' className="h-10 w-32 bg-blue-400 hover:bg-blue-500 text-center leading-10 text-primary text-xl rounded-md">About</NavLink>
        <button onClick={handleNavigation} className="h-10 w-32 bg-blue-400 hover:bg-blue-500 text-center leading-10 text-primary text-xl rounded-md">Contact</button>
      </div>
    </section>
  )
}

export default Home