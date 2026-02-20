import { useEffect, useState } from "react";


function App() {

  const [users, setUsers] = useState([])

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))

  }

  useEffect(() => {


    async function gitubUsers() {

      const responce = await fetch("https://api.github.com/users")

      const data = await responce.json();
      setUsers(data)

    }
    gitubUsers();



  }, [])



  return (
    <>
      <h1>The git hub users</h1>

      <div style={{ display: "flex",  justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>

        <div style={{ display: "flex",  justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          {users.map(user => <div>
            <img key={user.id} src={user.avatar_url} style={{ height: 200, width: 200, border: "2px solid red" }} ></img>
            <button style={{ border: "2px solid black" }} onClick={() => deleteUser(user.id)}>delete{user.id}</button>
          </div>)}

        </div>

        
      </div>

    </>
  )
}

export default App
