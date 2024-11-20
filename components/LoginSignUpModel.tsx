"use client"
import React, { useState } from 'react'
import useLogin from '../hooks/userLogin'

function LoginSignUpModel() {
  const { email, password, onChangeHandler, onSubmit, loading } = useLogin()
  return (
    <div className="bg-white bg-opacity-90 shadow-md w-full sm:w-96 h-auto rounded-lg px-8 py-6 flex flex-col justify-between">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

        <label className="text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name='email'
          value={email}
          onChange={onChangeHandler}
          className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
        />

        <label className="text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name='password'
          value={password}
          onChange={onChangeHandler}
          className="border border-gray-300 p-2 rounded mb-6 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your password"
        />

        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mb-4">
          {!loading ? "Login" : "Logging In..."}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-600">Or</p>
        <button className="bg-gray-500 text-white py-2 px-8 rounded hover:bg-gray-600 transition mt-2 w-full">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default LoginSignUpModel
