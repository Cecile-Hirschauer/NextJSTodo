import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useAuth } from '../context/AuthContext'

export default function Modal(props) {
    const { setOpenModal } = props
    const [_document, set_document] = useState(null)
    const { logout } = useAuth()

    useEffect(() => {
        set_document(document)
    }, [])

    if (!_document) { return null }

    return ReactDom.createPortal(
        <div className='fixed inset-0 flex flex-col text-lg bg-white text-slate-900 sm:text-xl'>
            <div className='flex items-center justify-between p-4 border-b border-solid border-slate-900'>
                <h1 className='text-2xl font-extrabold select-none sm:text-5xl'>MENU</h1>
                <i onClick={() => setOpenModal(false)} className="text-lg duration-300 cursor-pointer fa-solid fa-xmark hover:rotate-90 sm:text-3xl"></i>
            </div>
            <div className='flex flex-col gap-3 p-4'>
                <h2 onClick={() => {
                    logout()
                    setOpenModal(false)
                }} className='duration-300 cursor-pointer select-none hover:pl-2'>Logout</h2>
            </div>
        </div>,
        _document.getElementById('portal')
    )
}