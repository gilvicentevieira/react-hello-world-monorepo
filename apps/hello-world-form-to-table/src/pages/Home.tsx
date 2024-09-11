import { useState } from "react"
import SimpleForm from "../components/SimpleForm"
import Users from "../components/Users"

export interface User {
  username: string;
  email: string;
  password: string;
}

const Home = () => {

  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User)=>{
    setUsers((prev)=> [...users, user])
  }

  return (
    <section className="px-[10vw] py-20 flex justify-center gap-8">
      <Users users={users}/>
      <SimpleForm addUser={addUser}/>
    </section>
  )
}

export default Home