import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, RootState } from "../store/store"

const Home = () => {

  const count = useSelector((state: RootState)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <section className="text-primary px-[10vw] py-20 flex flex-col items-center gap-4">
      <p className="text-6xl mb-40">
        Hello World.
      </p>
      <div className="text-3xl flex gap-2">
        <p>Counter: </p>
        <span>{count}</span>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md" onClick={()=> dispatch(increment())}>+</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md" onClick={()=> dispatch(decrement())}>-</button>
      </div>
    </section>
  )
}

export default Home