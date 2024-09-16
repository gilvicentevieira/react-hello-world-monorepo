import Button from "../components/Button"

const Home = () => {

  const handleClick = ()=>{
    console.log("button clicked")
  }

  return (
    <section className="px-[10vw] py-20 flex flex-col justify-center">
      <p className="text-6xl text-primary text-center">Hello World</p>
      <Button label="Custom button" handleClick={handleClick}/>
    </section>
  )
}

export default Home