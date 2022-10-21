import React from 'react'

export default function Layout(props) {

    const { children } = props;

    return (
        <div className='relative flex flex-col min-h-screen text-white bg-slate-900 '>
            {children}
        </div>
    )
}
