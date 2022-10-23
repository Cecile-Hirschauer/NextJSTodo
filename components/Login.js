import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const [isLogingIn, setIsLogingIn] = useState(true)

  const {login, signup, currentUser} = useAuth();
  console.log(currentUser);
  
  const submitHandler = async () => {
    if (!email || !password) {
      setError('Please, enter your email and password.')
    }
    if (isLogingIn) {
      try {
        return await login(email, password);
      } catch (error) {
        setError('Incorrect email or password')
      }
      return;
    }
    await signup(email, password);
  }

  // log
  useEffect(() => {
    console.log('email: ', email)
    console.log('pwd: ', password)
    console.log('error: ', error)
    console.log('logged in ', isLogingIn)
  }), [email, password, error, isLogingIn]

  return (
    <div className='flex flex-col items-center justify-center flex-1 gap-2 text-xs sm:gap-4 sm:text-sm'>
      <h1 className='text-2xl font-extrabold uppercase select-none sm:text-4xl'>
        {isLogingIn ? 'Login' : 'Register'}
      </h1>
      {error && <div className='w-full max-w-[40ch] text-center border border-solid border-rose-400 text-rose-400 py-2'>{error}</div>}
      <input type="email"
        placeholder='Email Address'
        className='duration-300 border-b-2 border-solid border-white focus:border-cyan-300 outline-none text-slate-900 p-2 w-full max-w-[40ch] '
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input type="password"
        placeholder='Password'
        className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='w-full max-w-[40ch] border 
                      border-solid border-white py-2 uppercase duration-300 
                      relative after:absolute after:top-0 after:right-full 
                      after:bg-white after:z-10 after:w-full after:h-full 
                      overflow-hidden hover:after:translate-x-full after:duration-300
                      hover:text-slate-900'
        onClick={submitHandler}
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className='duration-300 cursor-pointer hover:scale-100'
        onClick={() => setIsLogingIn(!isLogingIn)}>{!isLogingIn ? 'Login' : 'Register'} </h2>
    </div>
  )
}
