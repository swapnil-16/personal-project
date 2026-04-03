// import React from 'react'

// const TaskListCards = () => {
//   return (
//     <div>TaskListCards</div>
//   )
// }

// export default TaskListCards 


import React from 'react'

const TaskListCards = () => {
  const tasks = [
    {
      id: 1,
      title: 'Complete Project Report',
      description: 'Finalize the Q4 project report with all metrics and submit to management',
      priority: 'High',
      date: 'Dec 25, 2024',
      priorityColor: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Review Code Changes',
      description: 'Review pull requests from the development team and provide feedback',
      priority: 'Medium',
      date: 'Dec 26, 2024',
      priorityColor: 'bg-yellow-500'
    },
    {
      id: 3,
      title: 'Team Meeting',
      description: 'Weekly sync meeting with the team to discuss progress and blockers',
      priority: 'Medium',
      date: 'Dec 27, 2024',
      priorityColor: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'Update Documentation',
      description: 'Update API documentation with new endpoints and examples',
      priority: 'Low',
      date: 'Dec 28, 2024',
      priorityColor: 'bg-green-500'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-200"
        >
          {/* Priority Badge */}
          <div className="flex justify-between items-start mb-3">
            <span className={`${task.priorityColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
              {task.priority}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {task.date}
            </span>
          </div>

          {/* Task Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{task.title}</h3>

          {/* Task Description */}
          <p className="text-gray-500 text-sm line-clamp-2">{task.description}</p>

          {/* View More Link */}
          <div className="mt-4 flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListCards