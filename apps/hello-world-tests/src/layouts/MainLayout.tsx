import { ReactNode } from "react"
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout