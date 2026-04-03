import React from 'react'
import Header from '../others/header'
import TaskListNumbers from '../others/TaskListNumbers' 
import TaskListCards from '../others/TaskListCards'

export const EmployeeDashboard = () => {
  return (
    <div>
        <Header></Header>
        <TaskListNumbers></TaskListNumbers>
        <TaskListCards></TaskListCards>

    </div>
  )
}
