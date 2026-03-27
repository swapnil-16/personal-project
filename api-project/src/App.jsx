import { useEffect, useState } from "react";


function App() {

  const [users, setUsers] = useState([])

  const [num, SetNum] = useState(30)

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

    const userToPin = users.filter(user => user.id === id)
    console.log(userToPin)

    const remeaningUsers = users.filter(user => user.id !== id)
    console.log(remeaningUsers)

    setUsers([...userToPin, ...remeaningUsers])

  }

  useEffect(() => {


    async function gitubUsers() {

      const responce = await fetch(`https://api.github.com/users?per_page=${num}`)

      const data = await responce.json();
      setUsers(data)

    }
    gitubUsers();



  }, [num])

  // const handleEnteredUser = () => { 
  //   console.log("the number has captured") 
  //   SetNum(num)

  // } 

  const clearAll = () => {
    // setUsers("");
    setUsers([])
  }


  const [hexcode, setHexcode] = useState("")

  const changeBackgroundColor = () => {


    function generateCode() {
      return Math.floor(100000 + Math.random() * 900000);
    }

    const code = generateCode();
    console.log(code);

    const hexCode = "#" + code
    setHexcode(hexCode)
    console.log(hexCode)
  }

  useEffect(() => {
    document.body.style.backgroundColor = hexcode
  }, [hexcode]);


  // const contacts = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];
  // const associates = ["A1", "A2", "A3"];

  // const distribution = {};

  // associates.forEach(a => distribution[a] = []);

  // contacts.forEach((contact, index) => {
  //   const associate = associates[index % associates.length];
  //   distribution[associate].push(contact);
  // });

  // console.log(distribution);

  return (
    <>
      <button onClick={changeBackgroundColor}>backgroung color</button>
      <h1>The git hub users</h1>
      <div className="d-flex">
        <p className="m-4 fw-bold fs-3">Enter number of users to be rendered</p>
        <input className="m-4" type="number " value={num} onChange={(e) => SetNum(e.target.value)}></input>

      </div>


      <div>
        <button className="btn btn-warning m-2" onClick={clearAll}>clear all</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          {users.map(user => <div className="card">
            <img key={user.id} src={user.avatar_url} style={{ height: 150, width: 150, }} ></img>
            <div className="#">
              <p className="text-center fw-semibold mb-0">{user.login} {user.id}</p>
              <button className="btn btn-outline-danger m-2" onClick={() => deleteUser(user.id)}>Delete</button>
              <button className="btn btn-outline-info" onClick={() => pinUser(user.id)}>Pin</button>
            </div>

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
