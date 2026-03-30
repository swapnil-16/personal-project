import React from 'react'
import { useState } from 'react'

const Login = () => {  

  const [email, setEmail] = useState("")

const [password, setPassword] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password) 
    setEmail("");
    setPassword("");
    
  }
  return (
    

<div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
    
    {/* Heading */}
    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
      Welcome Back
    </h2>

    {/* Form */}
    <form className="flex flex-col gap-4" onSubmit = {handelSubmit}>
      
      {/* Email */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Email
        </label>
        <input 
         value={email}
         onChange={(e)=> {
          setEmail(e.target.value)
         }}
         required 
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Password
        </label>
        <input
        value={password}
         onChange={(e)=> {
          setPassword(e.target.value)
         }} 
         
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
      >
       submit
      </button>

      {/* Extra */}
      <p className="text-sm text-gray-500 text-center mt-2">
        Forgot password?
      </p>
    </form>
  </div>
</div>
  )
}

export default Login