import { useEffect, useState } from "react";


function App() {

  const [users, setUsers] = useState([])

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))

  } 

  const pinUser = (id) => {
    // setUsers(users.map (user => user.id === id || user[0] )) 

  //   const userToPin = users.find(user => user.id === id);
  
  // // Step 2: Create new array WITHOUT that user
  // const remainingUsers = users.filter(user => user.id !== id);
  
  // // Step 3: Create new array WITH pinned user at start
  // const updatedUsers = [userToPin, ...remainingUsers];
  
  // // Step 4: Update state
  // setUsers(updatedUsers) 

   const userToPin = users.find(user => user.id === id) 
   console.log(userToPin) 

   const remeaningUsers = users.filter(user => user.id !== id) 
   console.log(remeaningUsers) 

   setUsers([userToPin , ...remeaningUsers])

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

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          {users.map(user => <div>
            <img key={user.id} src={user.avatar_url} style={{ height: 200, width: 200, border: "2px solid red" }} ></img>
            <button style={{ border: "2px solid black" }} onClick={() => deleteUser(user.id)}>delete{user.id}</button>
            <button style={{ border: "2px solid black" }} onClick={() => pinUser(user.id)}>Pin</button>
          </div>)}

        </div>
      </div>






      {/* <div className="card" >

        <div className="card-body">

          {users.map(user => <div className="d">
            <img key={user.id} src={user.avatar_url} style={{ height: 200, width: 200, border: "2px solid red" }} ></img>
            <button className="btn btn-primary" style={{ border: "2px solid black" }} onClick={() => deleteUser(user.id)}>delete{user.id}</button>
          </div>)}

        </div>
      </div> */}



    </>
  )
}

export default App
