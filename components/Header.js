import React from 'react'

export default function Header() {
    return (
        <div className='sticky top-0 left-0 flex items-center justify-between w-full p-4 border-b border-white border-solid bg-inherit'>
            <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
            <i className="text-xl duration-300 cursor-pointer fa-solid fa-user hover:opacity-30 sm:text-3xl"></i>
        </div>
    )
}
