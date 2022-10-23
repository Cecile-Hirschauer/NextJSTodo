import React from 'react'

export default function TodoCard(props) {
    const { children } = props;

    return (
        <div className='relative flex p-3 border border-white border-solid sm:p-2 item-stretch '>
            <div className="flex flex-1">
                {children}
            </div>
            <div className='flex items-center'>
                <i className="px-2 duration-300 cursor-pointer fa-solid hover:scale-125 fa-pen"></i>
                <i className="px-2 duration-300 cursor-pointer fa-solid fa-trash hover:scale-125"></i>
            </div>
        </div>

    )
}
