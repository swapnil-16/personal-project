import { useState } from "react";

function UiChanges() {

    const [text, setText] = useState("the UI changes");

    const [data, setData] = useState(true)


    const [num, SetNum] = useState(22) 



    const[tods, setTods] = useState([{name:"swapnil"},{id:2, name:"ajit"} ,{ id:3, name:"ani"}] )


    const [enteredData , setEnteredData] = useState("") 

    console.log(enteredData)

    const handleButtonClick = () =>
        // setText("react") 
        setText(prev => prev === "the UI changes" ? "react" : "the UI changes");

    const handleHide = () => {
        setData(prev => !prev)
    }

    const onClickAdd = () =>{
        SetNum(num => num+1);
    } 

    const onClickMinus = () =>{
        SetNum(num => num-1); 
        
    } 

    const addTask = () => {
        setTods([...tods,{name:enteredData.trim()}])
        setEnteredData("")
    } 

    const deleteList = (nameToDelete) => {
        setTods(tods.filter(tod => tod.name !== nameToDelete))  

        

       
        

    } 

    

    
  



    return (
        <>
            <h1>{text}</h1>
            <button onClick={handleButtonClick}>Change Heading</button>

            {data && <h2>the heading</h2>}
            <button onClick={handleHide}>hide above heading</button>

            <h3>{num}</h3>
            <button onClick={onClickAdd}>+</button>
            <button onClick={onClickMinus}>-</button> 

            <br></br>

            <input type = "text" value ={enteredData}   onChange={(e) => setEnteredData(e.target.value)}></input>
            <button onClick={addTask} >add</button> 
            <ul>
        {tods.map(tod => <li>{tod.name} <button onClick={ () => deleteList(tod.name)}>delete</button></li>) } 
       
       

       
            </ul>
            


        </>
    )


}

export default UiChanges






