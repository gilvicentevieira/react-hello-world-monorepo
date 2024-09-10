import { createContext, ReactNode, useState } from "react";

export const CounterContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
})

interface Props {
  children: ReactNode;
}

export const CounterProvider = ({children}: Props)=>{

  const [counter, setCounter] = useState<number>(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <CounterContext.Provider value={{counter, increment, decrement}}>
      {children}
    </CounterContext.Provider>
  )
}