import { useState } from "react";
function Swapnil() {
  const [name, setName] = useState("Swapnil");

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName(alert("you are a react dev"))}>
        Change Name
      </button>
    </div>
  );
}

export default Swapnil
