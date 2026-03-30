import React from 'react'

function Header() {
  return (
    // <div>
    //     <h1>hello swapnil </h1>
    //     <button>log out</button>
    // </div>
<div class="flex justify-between items-center bg-white px-6 py-4 shadow-sm border-b border-gray-200">
    <h1 class="text-xl font-semibold text-gray-800">
        Hello, <span class="text-blue-600">Swapnil</span>
    </h1>
    <button class="flex items-center gap-2 text-sm font-medium text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Log out
    </button>
</div>

  )
}

export default Header