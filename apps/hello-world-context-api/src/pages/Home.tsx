import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

const Home = () => {

  const {counter, increment, decrement} = useContext(CounterContext)

  return (
    <section className="text-primary px-[10vw] py-20 flex flex-col items-center gap-4">
      <p className="text-6xl mb-40">
        Hello World.
      </p>
      <div className="text-3xl flex gap-2">
        <p>Counter: </p>
        <span>{counter}</span>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md" onClick={()=> increment()}>+</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md" onClick={()=> decrement()}>-</button>
      </div>
    </section>
  )
}

export default Home