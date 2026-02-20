import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import TodoList from './components/todoList'
import Swapnil from './components/swapnil'


function App() {
  const movieNumber = 1;
  return (
    <div>
       <Header />
       
      <h1>My First Proper React App</h1>
      <Card title="React journey" description="Component-based UI library"></Card>

    {movieNumber === 1 ? (<TodoList  tasks= { {taskname:"avengers", tasktime:20}}/>) : 
     (<Footer />) }
<Swapnil />

      
      
    </div>
  )
}

export default App

