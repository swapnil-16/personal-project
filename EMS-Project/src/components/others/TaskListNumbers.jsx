// import React from 'react'

// const TaskListNumbers = () => {
//   return (
//     <div>
//         <div>
//             <h2>0</h2>
//             <h3>New Task</h3>
//         </div>
//     </div>
//   )
// }

// export default TaskListNumbers 
import React from 'react'

const TaskListNumbers = () => {
  const cards = [
    { title: 'New Task', count: 0, bgColor: 'bg-blue-500' },
    { title: 'Completed', count: 3, bgColor: 'bg-green-500' },
    { title: 'Accepted', count: 0, bgColor: 'bg-yellow-500' },
    { title: 'Failed', count: 1, bgColor: 'bg-red-500' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <h2 className="text-4xl font-bold mb-1">{card.count}</h2>
          <h3 className="text-base font-medium">{card.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers