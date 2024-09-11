import { User } from "../pages/Home"

interface Props {
  users: User[];
}

const Users = ({ users }: Props) => {

  console.log(users)

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (<li key={user.username}>{user.username}</li>)
        })
        }
      </ul>

    </div>
  )
}

export default Users