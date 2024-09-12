import { render, screen } from "@testing-library/react"
import Header from "./Header"

test('renders Live Coding session', ()=>{
  render(<Header/>)

  const textEl = screen.getByText(/live coding session/i)
  
  expect(textEl).toBeInTheDocument()
})

test('renders image', ()=>{
  render(<Header/>)

  const el = screen.getByRole('img')
  
  expect(el).toBeInTheDocument()
})