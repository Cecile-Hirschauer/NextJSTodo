import { async } from '@firebase/util';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import TodoCard from './TodoCard';

export default function UserDashboard() {
  const userInfo = useAuth();
  const [addTodo, setAddTodo] = useState(false)
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState({})
  console.log(todoList)

  useEffect(() => {
    if (!userInfo && Object.keys.length === 0) {
      setAddTodo(true)
    }
  }, [userInfo])

  const handleAddTodo = async () => {
    if (!todo) { return }
    const newKey = Object.keys(todoList).length === 0 ? 1 : [Math.max(...Object.keys(todoList)) + 1];
    setTodoList({ ...todoList, [newKey]: todo })
    setTodo('')
  }

  return (
    <div className='w-full min-w-[65ch] text-xs sm:text-sm flex flex-col gap-3 sm:gap-5'>
      <div className="flex item-stretch">
        <input
          type="text"
          placeholder='Enter todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 p-4 text-sm outline-nome sm:text-lg text-slate-900"
        />
        <button
          onClick={handleAddTodo}
          className='px-4 py-2 text-base font-medium text-white uppercase duration-300 w-fit sm:px-6 sm:py-3 bg-amber-400 hover:opacity-40'>
          ADD
        </button>
      </div>
      {userInfo &&
        <>
          {Object.keys(todoList).map((todo, index) => (
            <TodoCard key={index}>
              {todoList[todo]}
            </TodoCard>
          ))}
        </>}
      {/* {!addTodo &&
        <button
          className="py-2 text-lg font-medium text-center uppercase duration-300 border border-solid text-cyan-300 border-cyan-300 hover:opacity-30"
          onClick={() => setAddTodo(!addTodo)}
        >
          ADD TODO
        </button>} */}
    </div>
  )
}
